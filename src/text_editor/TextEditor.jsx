import React, { useState } from 'react';

function TextEditor({ textSegments, addTextSegment, updateCurrentText }) {
  const [inputText, setInputText] = useState('');

  const handleInputChange = ({ target }) => {
    const newText = target.value;
    setInputText(newText);
    updateCurrentText(newText);
  };

  const handleAddTextSegment = () => {
    if (inputText.trim()) {
      addTextSegment({ text: inputText });
      setInputText('');
    }
  };

  return (
    <div className="text-editor">
      <div className="display-text">
        {textSegments.map((segment, index) => (
          <span
            key={index}
            style={{
              fontFamily: segment.style.font,
              fontSize: `${segment.style.size}px`,
              color: segment.style.color,
              textTransform: segment.style.case === 'uppercase' ? 'uppercase' : 'lowercase',
            }}
          >
            {segment.text}
          </span>
        ))}
      </div>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        style={{
          fontFamily: 'inherit',
          fontSize: 'inherit',
          color: 'inherit',
        }}
      />
      <button onClick={handleAddTextSegment}>Add Text</button>
    </div>
  );
}

export default TextEditor;