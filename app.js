import React from "react";
import { NoteEditor } from "./components/NoteEditor";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

function App() {
  return (
    <AppContainer>
      <Header>My Notes App</Header>
      <NoteEditor />
    </AppContainer>
  );
}

export default App;
