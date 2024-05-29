import React, { useState } from 'react';
import Toolbar from './Toolbar';
import EngLowerKeyboard from './EngLowerKeyboard';
import EngUpperKeyboard from './EngUpperKeyboard';
import HebKeyboard from './HebKeyboard';
import NumbersAndSpecialKeyboard from './NumbersAndSpecialKeyboard';
import Output from './Output';
import ActionButtons from './ActionButtons';
import './TextEditor.css';

function TextEditor() {
  const [currentText, setCurrentText] = useState([]);
  const [history, setHistory] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({ fontFamily: 'Arial', fontSize: '16', color: '#000000' });
  const [currentKeyboard, setCurrentKeyboard] = useState('EngLower');

  const handleTextChange = (newText) => {
    setHistory(prevHistory => [...prevHistory, currentText]);
    setCurrentText(prevText => [...prevText, newText]);
  };

  const handleStyleChange = (newStyle) => {
    setCurrentStyle(newStyle);
  };

  const handleClearAllText = () => {
    setHistory(prevHistory => [...prevHistory, currentText]);
    setCurrentText([]);
  };

  const undoLastAction = () => {
    if (history.length > 0) {
      const previousState = history[history.length - 1];
      setHistory(prevHistory => prevHistory.slice(0, -1));
      setCurrentText(previousState);
    }
  };

  const handleKeyboardChange = (keyboard) => {
    setCurrentKeyboard(keyboard);
  };

  const handleApplyStyleToAll = (style) => {
    setCurrentText(prevText => prevText.map(char => ({ ...char, style: { ...char.style, ...style } })));
  };

  const handleCaseChange = (caseType) => {
    setCurrentText(prevText =>
      prevText.map(char => ({
        ...char,
        text: caseType === 'upper' ? char.text.toUpperCase() : char.text.toLowerCase()
      }))
    );
  };

  return (
    <div className="text-editor">
      <Toolbar
        currentStyle={currentStyle}
        onStyleChange={handleStyleChange}
        onKeyboardChange={handleKeyboardChange}
        onApplyStyleToAll={handleApplyStyleToAll}
        onCaseChange={handleCaseChange}
      />
      <div className="keyboard-container">
        {currentKeyboard === 'EngLower' && <EngLowerKeyboard onTextChange={handleTextChange} currentStyle={currentStyle} />}
        {currentKeyboard === 'EngUpper' && <EngUpperKeyboard onTextChange={handleTextChange} currentStyle={currentStyle} />}
        {currentKeyboard === 'Heb' && <HebKeyboard onTextChange={handleTextChange} currentStyle={currentStyle} />}
        {currentKeyboard === 'NumSpec' && <NumbersAndSpecialKeyboard onTextChange={handleTextChange} currentStyle={currentStyle} />}
      </div>
      <Output currentText={currentText} />
      <ActionButtons onClear={handleClearAllText} onUndo={undoLastAction} />
    </div>
  );
}

export default TextEditor;
