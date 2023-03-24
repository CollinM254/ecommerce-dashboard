import React from 'react';
import StyledDiv from './OperationsRegister-styles';

function OperatoinsRegister() {
  return (
    <StyledDiv>
      <h3>Register</h3>
      <form className="register-form">
        <p>Email address</p>
        <input type="email" placeholder="Email" />
        <p className="desc1">A link to set a new password will be sent to your email address.</p>
        <p className="desc2">
          Your personal data will be used to support your experience throughout this website, to
          manage access to your account, and for other purposes described in our
          {' '}
          <b>privacy policy.</b>
        </p>
        <input className="register-btn" type="submit" value="Register" />
      </form>
    </StyledDiv>
  );
}

export default OperatoinsRegister;
