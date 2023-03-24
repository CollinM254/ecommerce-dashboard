import React from 'react';
import StyledInfoRow from './InfoRow-styles';

function InfoRow({ productName }) {
  return (
    <StyledInfoRow>
      <p>
        Home
        {' '}
        <b>{'>'}</b>
        {' '}
        Shop
        {' '}
        <b>{'>'}</b>
      </p>
      {' '}
      <div className="divider" />
      {' '}
      <span>{productName}</span>
    </StyledInfoRow>
  );
}

export default InfoRow;
