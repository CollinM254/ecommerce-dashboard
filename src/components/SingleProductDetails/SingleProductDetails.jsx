import React, { useState } from 'react';
import StyledDiv from './SingleProductDetails-styles';
import img1 from '../../assets/svgs/details_1.svg';
import img2 from '../../assets/svgs/details_2.svg';

function SingleProductDetails({ product }) {
  const [activeTab, setTab] = useState(1);

  return (
    <StyledDiv>
      <div className="singleproduct__tabs">
        <span className={`tab ${activeTab === 1 ? 'active' : 'idle'}`} onClick={() => { setTab(1); }}>Description</span>
        <span className={`tab ${activeTab === 2 ? 'active' : 'idle'}`} onClick={() => { setTab(2); }}>Additional Information</span>
        <span className={`tab ${activeTab === 3 ? 'active' : 'idle'}`} onClick={() => { setTab(3); }}>{`Reviews [${product.reviews.length}]`}</span>
      </div>
      <div className="singleproduct__detail-desc">
        <p>{product.description}</p>
      </div>
      <div className="singleproduct__image-row">
        <div className="singleproduct__img img1" style={{ backgroundImage: `url(${img1})` }} />
        <div className="singleproduct__img img2" style={{ backgroundImage: `url(${img2})` }} />
      </div>
      <div className="singleproduct__divider" />
    </StyledDiv>
  );
}

export default SingleProductDetails;
