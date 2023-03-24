import { useState, React, useContext } from 'react';
import { ShopContext } from '../../logic/context/ShopContext';
import StyledcolorRow from './ColorOptions-styles';

function ColorOptions({ colorOptions }) {
  const context = useContext(ShopContext);

  const [selectedColor, setColor] = useState(colorOptions ? colorOptions[0] : '');

  const renderColors = colorOptions.map((color) => (
    <div
      key={color}
      className={`color ${color === selectedColor ? 'selected' : 'idle'}`}
      style={{ backgroundColor: `${color}` }}
      onClick={() => {
        setColor(color);
        context.updateColorOption(color);
      }}
    />
  ));
  return (
    colorOptions.length !== 0 && (
      <StyledcolorRow>
        <p>Color</p>
        <div className="colorRow">{renderColors}</div>
      </StyledcolorRow>
    )
  );
}

export default ColorOptions;
