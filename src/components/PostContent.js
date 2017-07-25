import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { generator } from "uigradients";
import _ from "lodash";

import highlight from "../utils/highlight";

import "prismjs/themes/prism.css";

/**
 * Cette fonction permet première de séparer les images du paragraph
 * On aurait donc en sortie un tableau contenant des paragraphes et des images.
 * Cette fonction permet aussi de détecter la présence d'une légende.
 * C'est à dire, un bloc de texte qui suit l'image.
 */
const splitParagraph = node => {
  return node.children.reduce((prev, curr) => {
    if (curr.type === "image") {
      prev.push(curr);
      return prev;
    }

    let last = _.get(prev, prev.length - 1, null);

    // On considère que tout le reste est pour la légende
    if (last && last.type === "image") {
      if (last.legend) {
        last.legend.children.push(curr);
      } else {
        last.legend = { children: [curr] };
      }

      return prev;
    }

    if (last === null) {
      last = {
        type: "paragraph",
        children: []
      };

      prev.push(last);
    }

    last.children.push(curr);

    return prev;
  }, []);
};

const Wrapper = styled.div`
  color: #434343;
  font-size: 19px;
  line-height: 1.8;
`;

const Paragraph = styled.p`margin-bottom: 35px;`;

const Link = styled.a`word-wrap: break-word;`;

const Emphasis = styled.em`font-style: italic;`;

const Strong = styled.strong`font-weight: bold;`;

const InlineCode = styled.code`
  font-family: monospace;
  background: #eee;
  padding: 2px 5px;
  border-radius: 2px;
`;

const BlockCode = styled.pre`
  font-size: 16px;
  margin: 0 0 35px !important;
`;

const Headings = {
  Heading1: styled.h1`
    font-weight: 400;
    font-size: 2.2em;
    line-height: 1.2;
    margin: 75px 0 50px 0;
  `,

  Heading2: styled.h2`
    font-weight: 700;
    font-size: 1.8em;
    line-height: 1.2;
    margin: 55px 0 35px 0;
  `,

  Heading3: styled.h3`
    font-weight: 400;
    font-size: 1.5em;
    line-height: 1.2;
    font-style: italic;
    margin: 45px 0 25px 0;
  `,

  Heading4: styled.h4`
    font-weight: 700;
    font-size: 1.2em;
    line-height: 1.2;
    margin: 45px 0 25px 0;
  `,

  Heading5: styled.h5`
    font-weight: 700;
    font-size: 1.1em;
    line-height: 1.2;
    margin: 35px 0 25px 0;
  `,

  Heading6: styled.h6`
    font-weight: 700;
    line-height: 1.2;
    margin: 25px 0 25px 0;
  `
};

const List = styled.ul`
  margin-bottom: 35px;
  padding-left: 35px;
`;

const ListItem = styled.li`list-style: initial;`;

const Blockquote = styled.blockquote`
  font-family: Georgia, serif;
  font-style: italic;
  width: 80%;
  margin: 0 0 35px -70px;
  padding-left: 35px;
  position: relative;
  color: #777;
  font-size: 26px;
  line-height: 1.3;

  &:before {
    display: block;
    content: "“";
    font-size: 80px;
    position: absolute;
    left: -20px;
    top: -22px;
    color: #777;
    line-height: 1.5;
  }
`;

const Html = styled.div`
  margin-bottom: 35px;
  text-align: center;
`;

const ImageContainer = styled.div`margin: 0 -50px 35px;`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  margin: 0 auto;
`;

const Legend = styled.p`
  text-align: center;
  font-style: italic;
  color: #aaa;
  margin-top: 15px;
`;

const FootnoteReference = styled.sup`
  font-size: 0.8em;
  vertical-align: super;
`;

const FootnoteDefinition = styled.div`
  display: flex;
  font-size: 0.8em;
  color: #aaa;
`;

const FootnoteDefinitionContent = styled.div`margin-left: 10px;`;

const Separator = styled.div`
  width: 300px;
  height: 1px;
  margin: 50px 0;
  ${generator({ gradient: "electric_violet", angle: 225 })};
`;

const ThematicBreak = Separator.extend`
  margin: 100px auto;
  width: 70%;
`;

export default class PostContent extends Component {
  static propTypes = {
    ast: PropTypes.object.isRequired
  };

  renderHeading(node) {
    const Component = Headings[`Heading${node.depth}`];

    return (
      <Component>
        {this.renderChildNodes(node)}
      </Component>
    );
  }

  renderParagraph(node, parent) {
    if (
      parent.type === "listItem" ||
      parent.type === "blockquote" ||
      parent.type === "footnoteDefinition"
    ) {
      return this.renderChildNodes(node);
    }

    // On souhaite exclure les blocks images
    const nodes = splitParagraph(node);

    return nodes.map(childNode => {
      if (childNode.type === "paragraph") {
        return (
          <Paragraph>
            {this.renderChildNodes(childNode)}
          </Paragraph>
        );
      }

      return this.renderNode(childNode, node);
    });
  }

  renderText(node) {
    return node.value;
  }

  renderEmphasis(node) {
    return (
      <Emphasis>
        {this.renderChildNodes(node)}
      </Emphasis>
    );
  }

  renderStrong(node) {
    return (
      <Strong>
        {this.renderChildNodes(node)}
      </Strong>
    );
  }

  renderInlineCode(node) {
    return (
      <InlineCode>
        {node.value}
      </InlineCode>
    );
  }

  renderLink(node) {
    return (
      <Link href={node.url} title={node.title}>
        {this.renderChildNodes(node)}
      </Link>
    );
  }

  renderLinkReference(node) {
    if (!this.definitions[node.identifier]) {
      return `[${this.renderChildNodes(node)}]`;
    }

    return this.renderLink({
      type: "link",
      url: this.definitions[node.identifier].url,
      title: this.definitions[node.identifier].title,
      children: node.children
    });
  }

  renderFootnoteReference(node) {
    return (
      <Link href={`#ref${node.identifier}`}>
        <FootnoteReference>
          {node.identifier}
        </FootnoteReference>
      </Link>
    );
  }

  renderList(node) {
    return (
      <List>
        {this.renderChildNodes(node)}
      </List>
    );
  }

  renderListItem(node) {
    return (
      <ListItem>
        {this.renderChildNodes(node)}
      </ListItem>
    );
  }

  renderCode(node) {
    return (
      <BlockCode className={`language-${node.lang}`}>
        <code
          className={`language-${node.lang}`}
          dangerouslySetInnerHTML={{ __html: highlight(node.lang, node.value) }}
        />
      </BlockCode>
    );
  }

  renderBlockquote(node) {
    return (
      <Blockquote>
        {this.renderChildNodes(node)}
      </Blockquote>
    );
  }

  renderHtml(node) {
    return <Html dangerouslySetInnerHTML={{ __html: node.value }} />;
  }

  renderImage(node) {
    return (
      <ImageContainer>
        <Image src={node.url} />

        {node.legend &&
          <Legend>
            {this.renderChildNodes(node.legend)}{" "}
          </Legend>}
      </ImageContainer>
    );
  }

  renderBreak(node) {
    return <br />;
  }

  renderThematicBreak(node) {
    return <ThematicBreak />;
  }

  renderNode(node, parent = null) {
    switch (node.type) {
      case "heading":
        return this.renderHeading(node, parent);
      case "paragraph":
        return this.renderParagraph(node, parent);
      case "text":
        return this.renderText(node, parent);
      case "emphasis":
        return this.renderEmphasis(node, parent);
      case "strong":
        return this.renderStrong(node, parent);
      case "inlineCode":
        return this.renderInlineCode(node, parent);
      case "link":
        return this.renderLink(node, parent);
      case "list":
        return this.renderList(node, parent);
      case "listItem":
        return this.renderListItem(node, parent);
      case "code":
        return this.renderCode(node, parent);
      case "blockquote":
        return this.renderBlockquote(node, parent);
      case "html":
        return this.renderHtml(node, parent);
      case "image":
        return this.renderImage(node, parent);
      case "break":
        return this.renderBreak(node, parent);
      case "linkReference":
        return this.renderLinkReference(node, parent);
      case "footnoteReference":
        return this.renderFootnoteReference(node, parent);
      case "thematicBreak":
        return this.renderThematicBreak(node, parent);

      default:
    }

    console.log(this.props.title);
    console.error(`Unknown ${node.type} node type`, node);

    return `[${node.type}]`;
  }

  renderChildNodes(node) {
    return node.children.map(childNode => this.renderNode(childNode, node));
  }

  renderFootnoteDefinitions() {
    const defs = _.values(this.footnoteDefinitions);

    if (!defs.length) {
      return null;
    }

    return (
      <div>
        <Separator />

        {defs.map(def =>
          <FootnoteDefinition id={`ref${def.identifier}`}>
            <FootnoteReference>
              {def.identifier}
            </FootnoteReference>
            <FootnoteDefinitionContent>
              {this.renderChildNodes(def)}
            </FootnoteDefinitionContent>
          </FootnoteDefinition>
        )}
      </div>
    );
  }

  render() {
    console.clear();

    const { ast } = this.props;

    // Get references
    this.definitions = {};
    this.footnoteDefinitions = {};

    ast.children = ast.children.reduce((prev, curr) => {
      if (curr.type === "definition") {
        this.definitions[curr.identifier] = curr;
        return prev;
      }

      if (curr.type === "footnoteDefinition") {
        this.footnoteDefinitions[curr.identifier] = curr;
        return prev;
      }

      prev.push(curr);
      return prev;
    }, []);

    return (
      <Wrapper>
        {this.renderChildNodes(ast)}
        {this.renderFootnoteDefinitions()}
      </Wrapper>
    );
  }
}
