import React from 'react';

function HebKeyboard({ onTextChange, currentStyle }) {
    const hebLetters = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ", "ק", "ר", "ש", "ת", "ך", "ם", "ן", "ץ", "ף",];

    const handleClicked = ({ target }) => {
        onTextChange({ text: target.innerHTML, style: currentStyle });
    }

    return (
        <div className="keyboard-button">
            {hebLetters.map((charter, i) => (
                <button
                    key={`${i}-heb-keyboard`}
                    onClick={handleClicked}
                >
                    {charter}
                </button>
            ))}
        </div>
    );
}

export default HebKeyboard;
