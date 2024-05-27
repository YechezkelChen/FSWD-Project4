import React from 'react';

function ActionButtons({ onClear, onUndo }) {
    return (
        <div className="action-buttons">
            <button onClick={onClear}>Clear All Text</button>
            <button onClick={onUndo}>Undo Last Action</button>
        </div>
    );
}

export default ActionButtons;
