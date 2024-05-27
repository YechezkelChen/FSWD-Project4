import React, { useState } from 'react';
import TextEditor from './TextEditor';
import Toolbar from './Toolbar';
import ActionButtons from './ActionButtons';
import './TextEditorApp.css';

function TextEditorApp() {
  const [textSegments, setTextSegments] = useState([]);
  const [history, setHistory] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({ font: 'Arial', size: '16px', color: '#000000', case: 'none' });

  const addTextSegment = (segment) => {
    setHistory([...history, textSegments]);
    setTextSegments([...textSegments, { ...segment, style: currentStyle }]);
  };

  const updateCurrentText = (text) => {
    const newSegment = { text, style: currentStyle };
    setTextSegments([...textSegments.slice(0, -1), newSegment]);
  };

  const handleStyleChange = (newStyle) => {
    setCurrentStyle(newStyle);
  };

  const handleDeleteLastSegment = () => {
    setHistory([...history, textSegments]);
    setTextSegments(textSegments.slice(0, -1));
  };

  const handleClearAllText = () => {
    setHistory([...history, textSegments]);
    setTextSegments([]);
  };

  const undoLastAction = () => {
    if (history.length > 0) {
      const previousState = history[history.length - 1];
      setHistory(history.slice(0, -1));
      setTextSegments(previousState);
    }
  };

  return (
    <div className="text-editor-app">
      <Toolbar currentStyle={currentStyle} onStyleChange={handleStyleChange} />
      <TextEditor textSegments={textSegments} addTextSegment={addTextSegment} updateCurrentText={updateCurrentText} />
      <ActionButtons onDelete={handleDeleteLastSegment} onClear={handleClearAllText} onUndo={undoLastAction} />
    </div>
  );
}

export default TextEditorApp;