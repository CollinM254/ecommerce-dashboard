import React from 'react';
import OperationsLogin from '../../components/OperationsLogin/OperationsLogin';
import StyledDiv from './Login-styles';
import Intro from '../../components/Intro/Intro';
import NavBar from '../../components/NavBar/NavBar';
import OperatoinsRegister from '../../components/OperationsRegister/OperationsRegister';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';

function Login() {
  return (
    <>
      <NavBar />
      <Intro />
      <StyledDiv>
        <div className="operations">
          <OperationsLogin />
          <OperatoinsRegister />
        </div>
        <Banner />
        <Footer />
      </StyledDiv>
    </>
  );
}

export default Login;
