import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/cjs/styles/hljs/night-owl";

type Props = {
  value: string;
  language?: string;
};

const CodeBlock: React.FC<Props> = ({ value, language }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={style}
      showLineNumbers
      customStyle={{
        borderRadius: 5,
        width: "100%",
        margin: "15px 0",
        fontSize: "12pt",
      }}
      children={value}
    />
  );
};

export default CodeBlock;
