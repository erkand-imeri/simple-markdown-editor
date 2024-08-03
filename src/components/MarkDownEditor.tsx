"use client";

import React, { useState } from "react";

const MarkdownEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>("");
  const [isLiveUpdate, setIsLiveUpdate] = useState<boolean>(true);
  const [renderedMarkdown, setRenderedMarkdown] = useState<string>("");

  const handleButtonClick = () => {
    setRenderedMarkdown(markdown);
  };

  return (
    <div className="flex flex-col h-screen w-screen p-4 bg-gray-200">
      <div className="flex flex-grow p-4">
        <textarea
          id="markdown-input"
          className="w-1/2 p-4 m-4 border-r border-gray-400"
          placeholder="Enter your Markdown here..."
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
        <textarea
          id="markdown-output"
          className="w-1/2 p-4 m-4 bg-white border-gray-400"
          value={isLiveUpdate ? markdown : renderedMarkdown}
          readOnly
        />
      </div>
      <div className="p-4 flex items-center justify-end">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isLiveUpdate}
            onChange={(e) => setIsLiveUpdate(e.target.checked)}
          />
          <span>Live Update</span>
        </label>
        <button
          onClick={handleButtonClick}
          disabled={isLiveUpdate}
          className={`bg-green-500 text-white p-2 rounded uppercase ml-4 ${
            isLiveUpdate
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-green-600"
          }`}
        >
          Render
        </button>
      </div>
    </div>
  );
};

export default MarkdownEditor;
