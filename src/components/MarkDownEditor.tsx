"use client";

import React, { useState } from "react";
import MarkdownPreview from "./MarkdownPreview";
import { useMarkdown } from "../hooks/useMarkdown";

const MarkdownEditor: React.FC = () => {
  const [isLiveUpdate, setIsLiveUpdate] = useState<boolean>(false);

  const { markdownText, handleMarkdownChange, handleButtonClick, textAreaRef } =
    useMarkdown(isLiveUpdate);

  return (
    <div className="flex flex-col h-screen w-screen p-4 bg-gray-200">
      <div className="flex flex-grow p-4">
        <textarea
          id="markdown-input"
          ref={textAreaRef}
          className="w-1/2 p-4 m-4 border-r border-gray-400"
          placeholder="Enter your Markdown here..."
          onChange={handleMarkdownChange}
        />
        <MarkdownPreview
          className="w-1/2 p-4 m-4 bg-white border-gray-400 overflow-auto"
          markdown={markdownText}
        />
      </div>
      <div className="p-4 flex items-center justify-end">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isLiveUpdate}
            onChange={(e) => setIsLiveUpdate(e.target.checked)}
            className="form-checkbox h-5 w-5 text-green-600"
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
