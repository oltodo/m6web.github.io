const select = require(`unist-util-select`);
const path = require(`path`);
const isRelativeUrl = require(`is-relative-url`);
const _ = require(`lodash`);
const { responsiveSizes } = require(`gatsby-plugin-sharp`);
const Promise = require(`bluebird`);
const cheerio = require(`cheerio`);

// If the image is relative (not hosted elsewhere)
// 1. Find the image file
// 2. Find the image's size
// 3. Filter out any responsive image sizes that are greater than the image's width
// 4. Create the responsive images.
// 5. Set the html w/ aspect ratio helper.
module.exports = (
  { files, markdownNode, markdownAST, pathPrefix, getNode },
  pluginOptions
) => {
  const defaults = {
    maxWidth: 650,
    wrapperStyle: ``,
    backgroundColor: `white`,
    linkImagesToOriginal: true,
    withoutEnlargement: true
  };

  const options = _.defaults(pluginOptions, defaults);

  // This will only work for markdown syntax image tags
  const markdownImageNodes = select(markdownAST, `image`);

  // This will also allow the use of html image tags
  const rawHtmlNodes = select(markdownAST, `html`);

  // Takes a node and generates the needed images and then returns
  // the needed HTML replacement for the image
  const updateNode = async function(node, resolve) {
    const imagePath = path.posix.join(
      getNode(markdownNode.parent).dir,
      node.url
    );
    const imageNode = _.find(files, file => {
      if (file && file.absolutePath) {
        return file.absolutePath === imagePath;
      }
      return null;
    });
    if (!imageNode || !imageNode.absolutePath) {
      return resolve();
    }

    let responsiveSizesResult = await responsiveSizes({
      file: imageNode,
      args: options
    });

    // Calculate the paddingBottom %
    const ratio = `${1 / responsiveSizesResult.aspectRatio * 100}%`;

    // {
    //   base64: "data:image/jpeg;base64,/9j/2wBDAB...9sPY1LkWRn//Z",
    //   aspectRatio: 0.6671875,
    //   src: "/static/6502341540bd8c8bdb4daa0a5ed1f514-fda47.jpeg",
    //   srcSet:
    //     "/static/6502341540bd8c8bdb4daa0a5ed1f514-c68eb.jpeg 185w,\n/static/6502341540bd8c8bdb4daa0a5ed1f514-4312a.jpeg 370w,\n/static/6502341540bd8c8bdb4daa0a5ed1f514-fda47.jpeg 427w",
    //   sizes: "(max-width: 740px) 100vw, 740px",
    //   originalImage: "/static/6502341540bd8c8bdb4daa0a5ed1f514-fda47.jpeg"
    // };

    const originalImg = responsiveSizesResult.originalImage;
    const fallbackSrc = responsiveSizesResult.src;
    const srcSet = responsiveSizesResult.srcSet;

    // Generate default alt tag
    const srcSplit = node.url.split(`/`);
    const fileName = srcSplit[srcSplit.length - 1];
    const fileNameNoExt = fileName.replace(/\.[^/.]+$/, ``);
    const defaultAlt = fileNameNoExt.replace(/[^A-Z0-9]/gi, ` `);

    node.url = originalImg;
  };

  return Promise.all(
    // Simple because there is no nesting in markdown
    markdownImageNodes.map(
      node =>
        new Promise(async (resolve, reject) => {
          const fileType = node.url.slice(-3);

          // Ignore gifs as we can't process them,
          // svgs as they are already responsive by definition
          if (
            isRelativeUrl(node.url) &&
            fileType !== `gif` &&
            fileType !== `svg`
          ) {
            await updateNode(node, resolve);
          }

          return resolve();
        })
    )
  ).then(() =>
    // HTML image node stuff

    Promise.all(
      // Complex because HTML nodes can contain multiple images
      rawHtmlNodes.map(
        node =>
          new Promise(async (resolve, reject) => {
            const $ = cheerio.load(node.value);
            if ($(`img`).length === 0) {
              // No img tags
              return resolve();
            }

            let imageRefs = [];
            $(`img`).each(function() {
              imageRefs.push($(this));
            });

            for (let thisImg of imageRefs) {

              node.type = 'image';
              node.url = thisImg.attr(`src`);
              node.title = thisImg.attr(`title`);
              node.alt = thisImg.attr(`alt`);
              delete node.value;

              const fileType = node.url.slice(-3);

              // Ignore gifs as we can't process them,
              // svgs as they are already responsive by definition
              if (
                isRelativeUrl(node.url) &&
                fileType !== `gif` &&
                fileType !== `svg`
              ) {
                await updateNode(formattedImgTag, resolve);
              }
            }

            return resolve();
          })
      )
    )
  );
};
