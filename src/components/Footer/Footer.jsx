import React from 'react';
import { Link } from 'react-router-dom';
import StyledFooter from './Footer-styles';

function Footer() {
  return (
    <StyledFooter>
      <div className="footer__links">
        <div className="footer__column column1">
          <p className="footer__address address1">400 University Drive Suite 200 Coral Gables,</p>
          <p className="footer__address address2">FL 33134 USA</p>
        </div>
        <div className="footer__column column2">
          <h6>Links</h6>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer__column column3">
          <h6>Help</h6>
          <Link to="/">Payment Options</Link>
          <Link to="/shop">Returns</Link>
          <Link to="/about">Privacy Policies</Link>
        </div>
        <div className="footer__column column4">
          <h6>Newsletter</h6>
          <form className="footer__form">
            <input
              type="email"
              className="footer_email"
              name="email"
              placeholder="Enter Your Email Address"
            />
            <input type="submit" className="footer__submit-btn" value="SUBSCRIBE" />
          </form>
        </div>
      </div>

      <div className="footer__divider" />
      <p className="rights">2022 Meubel House. All rights reverved</p>
    </StyledFooter>
  );
}

export default Footer;
