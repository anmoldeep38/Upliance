import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "@mui/material";

const RichTextEditor: React.FC = () => {
  const [text, setText] = useState(localStorage.getItem("editorData") || "");

  const handleSave = () => {
    localStorage.setItem("editorData", text);
  };

  return (
    <div>
      <ReactQuill value={text} onChange={setText} />
      <Button variant="contained" onClick={handleSave} sx={{ marginTop: "10px" }}>
        Save
      </Button>
    </div>
  );
};

export default RichTextEditor;
