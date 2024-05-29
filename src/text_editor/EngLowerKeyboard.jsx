import React from 'react';

function EngLowerKeyboard({ onTextChange, currentStyle }) {
    const engLowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const handleClicked = ({ target }) => {
        onTextChange({ text: target.innerHTML, style: currentStyle });
    }

    return (
        <div className="keyboard-button">
            {engLowerLetters.map((charter, i) => (
                <button
                    key={`${i}-eng-lower-keyboard`}
                    onClick={handleClicked}
                >
                    {charter}
                </button>
            ))}
        </div>
    );
}

export default EngLowerKeyboard;
