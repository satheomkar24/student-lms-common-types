import { useRef } from "react";
import JoditEditor from "jodit-react";

type Props = {
  placeholder?: string;
  content: string;
  setContent: (content: string) => void;
};

export const Editor = ({ placeholder, content, setContent }: Props) => {
  const editor = useRef(null);

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/docs/,
    placeholder: placeholder || "Start typings...",
    height: 350,
  };

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={(newContent: string) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
    />
  );
};
