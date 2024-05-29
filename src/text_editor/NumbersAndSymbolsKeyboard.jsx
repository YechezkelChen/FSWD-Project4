import React from 'react';

function NumbersAndSymbolsKeyboard({ onTextChange, currentStyle }) {
    const numbersAndSymbolsLetters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", ",", ".", "/", "@", `"`, "?", "!", "~", "`"];

    const handleClicked = ({ target }) => {
        onTextChange({ text: target.innerHTML, style: currentStyle });
    }

    return (
        <div className="keyboard-button">
            {numbersAndSymbolsLetters.map((character, i) => (
                <button
                    key={`${i}-num-symb-keyboard`}
                    onClick={handleClicked}
                >
                    {character}
                </button>
            ))}
        </div>
    );
}

export default NumbersAndSymbolsKeyboard;
