import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import styled from "styled-components";

const EditorContainer = styled.div`
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  button {
    margin: 0 5px;
    padding: 10px;
    background-color: #454545;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    
    &:hover {
      background-color: #6e6e6e;
    }

    &.active {
      background-color: #d4a5a5;
    }
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

export const NoteEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Start taking notes...</p>',
  });

  if (!editor) {
    return null;
  }

  return (
    <EditorContainer>
      <Toolbar>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "active" : ""}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "active" : ""}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive("heading", { level: 1 }) ? "active" : ""}
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive("heading", { level: 2 }) ? "active" : ""}
        >
          H2
        </button>
      </Toolbar>
      <ContentArea>
        <EditorContent editor={editor} />
      </ContentArea>
    </EditorContainer>
  );
};
