import React from 'react';

function ActionButtons({ onDelete, onClear, onUndo }) {
  return (
    <div className="action-buttons">
      <button onClick={onDelete}>Delete Last Segment</button>
      <button onClick={onClear}>Clear All Text</button>
      <button onClick={onUndo}>Undo Last Action</button>
    </div>
  );
}

export default ActionButtons;
