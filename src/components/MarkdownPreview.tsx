import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownPreviewProps {
  markdown: string;
  className: string;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({
  markdown,
  className,
}) => {
  return (
    <div id="markdown-output" className={className}>
      <Markdown className="prose" remarkPlugins={[remarkGfm]}>
        {markdown}
      </Markdown>
    </div>
  );
};

export default MarkdownPreview;
