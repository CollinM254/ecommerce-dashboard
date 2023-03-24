import React from 'react';
import StyledListItem from './DropDownItem-styles';

function DropDownItem({ text }) {
  return <StyledListItem>{ text }</StyledListItem>;
}

export default DropDownItem;
