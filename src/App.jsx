import React, { useState } from 'react';
import './App.css'
import TextEditor from './text_editor/TextEditor.jsx'
import Game from './game/Game.jsx'

function App() {
  const [showTextEditor, setShowTextEditor] = useState(false);
  const [showGame, setShowGame] = useState(false);

  const handleTextEditorClick = () => {
    setShowTextEditor(true);
    setShowGame(false);
  };

  const handleGameClick = () => {
    setShowTextEditor(false);
    setShowGame(true);
  };

  return (
    <div className="main-container">
      {!showTextEditor && !showGame &&  <h1>Main Page</h1>}
      {showTextEditor && <h1>Text Editor</h1>}
      {showGame && <h1>Get To 100!!!</h1>}
      
      <div className="button-container">
        <button className="app-button" onClick={handleTextEditorClick}>Text Editor</button>
        <button className="app-button" onClick={handleGameClick}>Game</button>
      </div>

      {showTextEditor && <TextEditor />}
      {showGame && <Game />}
    </ div>
  )
}

export default App
