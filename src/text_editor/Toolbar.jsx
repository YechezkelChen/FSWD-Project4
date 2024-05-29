import React from 'react';

function Toolbar({ currentStyle, onStyleChange, onKeyboardChange, onApplyStyleToAll, onCaseChange }) {
  const handleStyleChange = ({ target }) => {
    const { name, value } = target;
    onStyleChange({ ...currentStyle, [name]: value });
  };

  const handleApplyStyleToAll = () => {
    onApplyStyleToAll(currentStyle);
  };

  const handleCaseChange = (caseType) => {
    onCaseChange(caseType);
  };

  return (
    <div className="toolbar">
      <div className="style-controls">
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
          <input type="number" name="fontSize" min={1} value={parseInt(currentStyle.fontSize)} onChange={handleStyleChange} />
        </label>
        <label>
          Color:
          <input type="color" name="color" value={currentStyle.color} onChange={handleStyleChange} />
        </label>
        <button onClick={handleApplyStyleToAll}>Apply Style to All Text</button>
      </div>
      <div className="keyboard-controls">
        <button onClick={() => onKeyboardChange('EngLower')}>Eng Lower</button>
        <button onClick={() => onKeyboardChange('EngUpper')}>Eng Upper</button>
        <button onClick={() => onKeyboardChange('Heb')}>Hebrew</button>
        <button onClick={() => onKeyboardChange('NumSpec')}>Numbers & Special</button>
      </div>
      <div className="text-case-controls">
        <button onClick={() => handleCaseChange('upper')}>Uppercase All Text</button>
        <button onClick={() => handleCaseChange('lower')}>Lowercase All Text</button>
      </div>
    </div>
  );
}

export default Toolbar;
