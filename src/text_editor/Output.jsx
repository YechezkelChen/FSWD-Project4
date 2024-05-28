import React from 'react';

function Output({ currentText }) {
    return (
        <div className="output">
            {currentText &&
                currentText.map((charter, index) => (
                    <span key={index} style={{ ...charter.style, fontSize: `${charter.style.fontSize}px` }}>
                        {charter.text}
                    </span>
                ))}
        </div>
    );
}

export default Output;
