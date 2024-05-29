import React from 'react';

function EngUpperKeyboard({ onTextChange, currentStyle }) {
    const engUpperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    const handleClicked = ({ target }) => {
        onTextChange({ text: target.innerHTML, style: currentStyle });
    }

    return (
        <div className="keyboard-button">
            {engUpperLetters.map((character, i) => (
                <button
                    key={`${i}-eng-upper-keyboard`}
                    onClick={handleClicked}
                >
                    {character}
                </button>
            ))}
        </div>
    );
}

export default EngUpperKeyboard;
