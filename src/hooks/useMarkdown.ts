import { useState, useEffect, useCallback, useMemo, useRef } from "react";

const MARKDOWN_STORAGE_KEY = "markdown-editor-content";

export const useMarkdown = (isLiveUpdate: boolean) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [liveMarkdownText, setLiveMarkdownText] = useState<string>("");
  const [onMarkdownText, setOnMarkdownText] = useState<string>("");

  const loadMarkdownFromLocalStorage = useCallback(() => {
    const savedMarkdown = localStorage.getItem(MARKDOWN_STORAGE_KEY);
    if (savedMarkdown) {
      if (textAreaRef.current) {
        textAreaRef.current.value = savedMarkdown;
      }
      setOnMarkdownText(savedMarkdown);
    }
  }, []);

  const handleMarkdownChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setLiveMarkdownText(value);
    localStorage.setItem(MARKDOWN_STORAGE_KEY, value);
  }, []);

  const handleButtonClick = useCallback(() => {
    if (textAreaRef.current) {
      setOnMarkdownText(textAreaRef.current.value);
    }
  }, []);

  useEffect(() => {
    loadMarkdownFromLocalStorage();
  }, [loadMarkdownFromLocalStorage]);

  const markdownText = useMemo(
    () =>
      isLiveUpdate
        ? liveMarkdownText
        : onMarkdownText,
    [isLiveUpdate, onMarkdownText, liveMarkdownText]
  );

  return {
    markdownText,
    handleMarkdownChange,
    handleButtonClick,
    textAreaRef,
  };
};
