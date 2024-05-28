import React from 'react';

function TextEditor({ currentText, currentStyle, onTextChange }) {
  const handleInputChange = (e) => {
    const textNodes = Array.from(e.target.childNodes).map(node => ({
      text: node.textContent,
      style: node.nodeType === Node.ELEMENT_NODE ? {
        font: node.style.fontFamily,
        size: node.style.fontSize,
        color: node.style.color,
        case: node.style.textTransform,
      } : currentStyle,
    }));
    onTextChange(textNodes);
  };

  return (
    <div
      className="text-editor"
      contentEditable="true"
      suppressContentEditableWarning={true}
      onInput={handleInputChange}
    >
      {currentText.map((chunk, index) => (
        <span
          key={index}
          style={{
            fontFamily: chunk.style.font,
            fontSize: chunk.style.size,
            color: chunk.style.color,
            textTransform: chunk.style.case === 'uppercase' ? 'uppercase' : 'lowercase',
          }}
        >
          {chunk.text}
        </span>
      ))}
    </div>
  );
}

export default TextEditor;
