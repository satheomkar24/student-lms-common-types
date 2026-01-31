import { useEffect, useRef, useState } from "react";

type Props = {
  placeholder?: string;
  content: string;
  setContent: (content: string) => void;
};

export const Editor = ({ placeholder, content, setContent }: Props) => {
  const editorRef = useRef<any>(null);
  const [JoditEditor, setJoditEditor] =
    useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let mounted = true;

    import("jodit-react")
      .then((mod) => {
        if (mounted) {
          setJoditEditor(() => mod.default);
        }
      })
      .catch(() => {
        console.error("Failed to load Jodit editor");
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (!JoditEditor) return null; // ⛔ backend & SSR safe

  const config = {
    readonly: false,
    placeholder: placeholder || "Start typing...",
    height: 350,
  };

  return (
    <JoditEditor
      ref={editorRef}
      value={content}
      config={config}
      tabIndex={1}
      onBlur={(newContent: string) => setContent(newContent)}
    />
  );
};
