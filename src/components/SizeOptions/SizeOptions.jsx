import { useState, React, useContext } from 'react';
import { ShopContext } from '../../logic/context/ShopContext';
import StyledSizeRow from './SizeOptions-styles';

function SizeOptions({ sizeOptions }) {
  const context = useContext(ShopContext);

  const [selectedSize, setSize] = useState(sizeOptions ? sizeOptions[0] : '');

  const renderSizes = sizeOptions.map((size) => (
    <div
      key={size}
      className={`size ${size === selectedSize ? 'selected' : 'idle'}`}
      onClick={() => {
        setSize(size);
        context?.updateSizeOption(size);
      }}
    >
      {size}
    </div>
  ));
  return (
    sizeOptions.length !== 0 && (
      <StyledSizeRow>
        <p>Size</p>
        <div className="sizeRow">{renderSizes}</div>
      </StyledSizeRow>
    )
  );
}

export default SizeOptions;
