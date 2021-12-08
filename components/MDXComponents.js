import Heading from "./markdown/Heading";
import BlockQuote from "./markdown/BlockQuote";
import Code from "./markdown/Code";

const MDXComponents = {
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  h4: Heading.H4,
  h5: Heading.H5,
  h6: Heading.H6,
  blockquote: BlockQuote,
  pre: Code,
};

export default MDXComponents;
