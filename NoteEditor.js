import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import styled from "styled-components";
import { FaBold, FaItalic, FaHeading, FaSave, FaEraser } from "react-icons/fa";

const EditorContainer = styled.div`
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const IconButton = styled.button`
  background-color: #454545;
  border: none;
  border-radius: 5px;
  padding: 10px;
  color: white;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    background-color: #6e6e6e;
  }

  &.active {
    background-color: #d4a5a5;
  }
`;

const ContentArea = styled.div`
  background-color: #2e2e2e;
  padding: 15px;
  border-radius: 8px;
  min-height: 200px;
  color: white;
  font-size: 1rem;
`;

const ActionButtons = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`;

export const NoteEditor = ({ onSave }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Start taking notes...</p>',
  });
  const [noteContent, setNoteContent] = useState('');

  if (!editor) {
    return null;
  }

  const handleSave = () => {
    const content = editor.getHTML();
    onSave(content);
    editor.commands.clearContent();
  };

  const handleClear = () => {
    editor.commands.clearContent();
  };

  return (
    <EditorContainer>
      <Toolbar>
        <IconButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "active" : ""}
        >
          <FaBold />
        </IconButton>
        <IconButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "active" : ""}
        >
          <FaItalic />
        </IconButton>
        <IconButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive("heading", { level: 1 }) ? "active" : ""}
        >
          <FaHeading /> H1
        </IconButton>
        <IconButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive("heading", { level: 2 }) ? "active" : ""}
        >
          <FaHeading /> H2
        </IconButton>
      </Toolbar>

      <ContentArea>
        <EditorContent editor={editor} />
      </ContentArea>

      <ActionButtons>
        <IconButton onClick={handleSave}>
          <FaSave /> Save Note
        </IconButton>
        <IconButton onClick={handleClear}>
          <FaEraser /> Clear
        </IconButton>
      </ActionButtons>
    </EditorContainer>
  );
};
