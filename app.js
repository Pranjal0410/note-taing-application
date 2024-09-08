import React, { useState } from "react";
import { NoteEditor } from "./components/NoteEditor";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #2e2e2e;
  color: #fff;
`;

const Header = styled.h1`
  margin-bottom: 20px;
  font-size: 2.5rem;
  text-align: center;
  color: #d4a5a5;
`;

const EditorSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 3;
`;

const Sidebar = styled.div`
  flex: 1;
  background-color: #1e1e1e;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid #454545;
`;

const NoteItem = styled.div`
  background-color: #454545;
  color: white;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #6e6e6e;
  }
`;

function App() {
  const [notes, setNotes] = useState([]);

  const handleSaveNote = (note) => {
    setNotes([note, ...notes]);
  };

  return (
    <AppContainer>
      <Sidebar>
        <Header>Notes History</Header>
        {notes.length === 0 ? <p>No notes yet...</p> : notes.map((note, index) => (
          <NoteItem key={index}>{note}</NoteItem>
        ))}
      </Sidebar>

      <EditorSection>
        <Header>Create a Note</Header>
        <NoteEditor onSave={handleSaveNote} />
      </EditorSection>
    </AppContainer>
  );
}

export default App;
