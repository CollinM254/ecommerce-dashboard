import React from 'react';
import StlyedBanner from './Banner-styles';

function Banner() {
  return (
    <StlyedBanner>
      <div className="banner__cont">
        <h3>Free Delivery</h3>
        <p>For all oders over $50, consectetur adipim scing elit.</p>
      </div>
      <div className="banner__cont">
        <h3>90 Days Return</h3>
        <p>If goods have problems, consectetur adipim scing elit.</p>
      </div>
      <div className="banner__cont">
        <h3>Secure Payment</h3>
        <p>100% secure payment, consectetur adipim scing elit.</p>
      </div>
    </StlyedBanner>
  );
}

export default Banner;
