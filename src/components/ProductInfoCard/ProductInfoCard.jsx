import React from 'react';
import StyledProductInfoCard from './ProductInfoCard-styles';
import facebook from '../../assets/svgs/facebook.svg';
import linkedin from '../../assets/svgs/linkedin.svg';
import twitter from '../../assets/svgs/twitter.svg';

function ProductInfoCard({ product }) {
  return (
    <StyledProductInfoCard>
      <div className="row">
        <div className="row__left">
          <span>SKU</span>
          <span>:</span>
        </div>
        <span>{product.sku}</span>
      </div>
      <div className="row">
        <div className="row__left">
          <span>Category</span>
          <span>:</span>
        </div>
        <span>{product.category}</span>
      </div>
      <div className="row">
        <div className="row__left">
          <span>Tags</span>
          <span>:</span>
        </div>
        <span>{product.tags.join(', ')}</span>
      </div>
      <div className="row">
        <div className="row__left">
          <span>Share</span>
          <span>:</span>
        </div>
        <div className="row__share">
          <div className="row__logo" style={{ backgroundImage: `url(${facebook})` }} />
          <div className="row__logo" style={{ backgroundImage: `url(${linkedin})` }} />
          <div className="row__logo" style={{ backgroundImage: `url(${twitter})` }} />
        </div>
      </div>
    </StyledProductInfoCard>
  );
}
export default ProductInfoCard;
