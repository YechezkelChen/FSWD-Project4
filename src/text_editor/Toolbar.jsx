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
        <select name="font" value={currentStyle.font} onChange={handleStyleChange}>
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select>
      </label>
      <label>
        Size:
        <input type="number" name="size" min={1} value={parseInt(currentStyle.size)} onChange={handleStyleChange} /> px
      </label>
      <label>
        Color:
        <input type="color" name="color" value={currentStyle.color} onChange={handleStyleChange} />
      </label>
      <label>
        Case:
        <select name="case" value={currentStyle.case} onChange={handleStyleChange}>
          <option value="none">None</option>
          <option value="uppercase">UPPERCASE</option>
          <option value="lowercase">lowercase</option>
        </select>
      </label>
    </div>
  );
}

export default Toolbar;
