import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Code = ({
  children: {
    props: { className, children },
  },
}) => {
  const language = className.split("-")[1];

  return (
    <SyntaxHighlighter language={language} style={dracula}>
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
};

export default Code;
