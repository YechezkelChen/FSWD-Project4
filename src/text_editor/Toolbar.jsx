import React from 'react';

function Toolbar({ currentStyle, onStyleChange }) {
  const handleStyleChange = ({ target }) => {
    const { name, value } = target;
    onStyleChange({ ...currentStyle, [name]: value });
  };

  return (
    <div className="toolbar">
      <label>
        Font:
        <select name="fontFamily" value={currentStyle.fontFamily} onChange={handleStyleChange}>
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select>
      </label>
      <label>
        Size:
        <input type="number" name="fontSize" min={1} value={parseInt(currentStyle.fontSize)} onChange={handleStyleChange} /> px
      </label>
      <label>
        Color:
        <input type="color" name="color" value={currentStyle.color} onChange={handleStyleChange} />
      </label>
    </div>
  );
}

export default Toolbar;
