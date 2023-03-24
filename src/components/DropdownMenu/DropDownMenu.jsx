import React from 'react';
import DropDownItem from './DropDownItem/DropDownItem';
import StyledDropDown from './DropDownMenu-styles';

function DropDownMenu({ items }) {
  const renderedMenu = items.map((item) => <DropDownItem key={item} text={item} />);
  return (
    <StyledDropDown>
      <div className="dropdown__header">{items[0]}</div>
    </StyledDropDown>
  );
}

export default DropDownMenu;
