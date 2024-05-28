import React from 'react';

function NumbersAndSpecialKeyboard({ onTextChange, currentStyle }) {
    const numbersAndSpecialLetters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", ",", ".", "/", "@", `"`, "?", "!", "~", "`"];

    const handleClicked = ({ target }) => {
        onTextChange({ text: target.innerHTML, style: currentStyle });
    }

    return (
        <div className="keyboard-button">
            {numbersAndSpecialLetters.map((charter, i) => (
                <button
                    key={`${i}-num-spec-keyboard`}
                    onClick={handleClicked}
                >
                    {charter}
                </button>
            ))}
        </div>
    );
}

export default NumbersAndSpecialKeyboard;
