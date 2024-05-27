import React, { useState } from 'react';

function TextEditor({ currentText, currentStyle, onTextChange }) {
    const handleInputChange = ({ target }) => {
        onTextChange(target.innerText);
    };

    return (
        <div
            className="text-editor"
            contentEditable="true"
            suppressContentEditableWarning={true}
            style={{
                fontFamily: currentStyle.font,
                fontSize: `${currentStyle.size}px`,
                color: currentStyle.color,
                textTransform: currentStyle.case === 'uppercase' ? 'uppercase' : 'lowercase',
            }}
            onInput={handleInputChange}
        />
    );
}

export default TextEditor;
