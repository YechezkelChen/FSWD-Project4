import React, { useState } from 'react';
import TextEditor from './TextEditor';
import Toolbar from './Toolbar';
import ActionButtons from './ActionButtons';
import './TextEditorApp.css';

function TextEditorApp() {
  const [currentText, setCurrentText] = useState('');
  const [history, setHistory] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({ font: 'Arial', size: '16px', color: '#000000', case: 'none' });

  const handleTextChange = (newText) => {
    setHistory([...history, currentText]);
    setCurrentText(newText);
  };

  const handleStyleChange = (newStyle) => {
    setCurrentStyle(newStyle);
  };

  const handleClearAllText = () => {
    setHistory([...history, currentText]);
    setTextSegments('');
  };

  const undoLastAction = () => {
    if (history.length > 0) {
      const previousState = history[history.length - 1];
      setHistory(history.slice(0, -1));
      setCurrentText(previousState);
    }
  };

  return (
    <div className="text-editor-app">
      <Toolbar currentStyle={currentStyle} onStyleChange={handleStyleChange} />
      <TextEditor currentText={currentText} currentStyle={currentStyle} onTextChange={handleTextChange} />
      <ActionButtons onClear={handleClearAllText} onUndo={undoLastAction} />
    </div>
  );
}

export default TextEditorApp;
