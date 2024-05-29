import React from 'react';

function ActionButtons({ onClear, onUndo, onDeleteLastCharacter }) {
    return (
        <div className="action-buttons">
            <button onClick={onClear}>Clear All Text</button>
            <button onClick={onUndo}>Undo Last Action</button>
            <button onClick={onDeleteLastCharacter}>Delete Last Character</button>
        </div>
    );
}

export default ActionButtons;
