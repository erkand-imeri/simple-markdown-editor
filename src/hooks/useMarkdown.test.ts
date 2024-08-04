import { renderHook, act } from "@testing-library/react-hooks";
import { useMarkdown } from "./useMarkdown";

describe("useMarkdown", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should initialize with empty markdownText", () => {
    const { result } = renderHook(() => useMarkdown(false));
    expect(result.current.markdownText).toBe("");
  });

  it("should update liveMarkdownText on change", () => {
    const { result } = renderHook(() => useMarkdown(true));
    act(() => {
      const event = {
        target: { value: "# header 1" },
      } as unknown as React.ChangeEvent<HTMLTextAreaElement>;
      result.current.handleMarkdownChange(event);
    });
    expect(result.current.markdownText).toBe("# header 1");
  });
});
