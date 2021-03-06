const grayMatter = require(`gray-matter`);
const crypto = require(`crypto`);
module.exports = async function onCreateNode({
  node,
  getNode,
  loadNodeContent,
  boundActionCreators
}) {
  const { createNode, createParentChildLink } = boundActionCreators;

  // We only care about markdown content.
  if (node.internal.mediaType !== `text/markdown` && node.internal.mediaType !== `text/x-markdown`) {
    return;
  }

  const nodeContent = await loadNodeContent(node);
  const {data, content} = grayMatter(nodeContent);

  const contentDigest = crypto
    .createHash(`md5`)
    .update(nodeContent)
    .digest(`hex`);

  const markdownNode = {
    id: `${node.id} >>> MarkdownRemark`,
    children: [],
    parent: node.id,
    internal: {
      content,
      contentDigest,
      type: `MarkdownRemark`
    }
  };
  markdownNode.frontmatter = {
    title: ``, // always include a title
    ...data,
    parent: node.id
  };

  // Add path to the markdown file path
  if (node.internal.type === `File`) {
    markdownNode.fileAbsolutePath = node.absolutePath;
  }

  createNode(markdownNode);
  createParentChildLink({ parent: node, child: markdownNode });
};
