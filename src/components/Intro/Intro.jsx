import React from 'react';
import { useLocation } from 'react-router-dom';
import StyledIntro from './Intro-styles';

function Intro() {
  const location = useLocation();
  const dummyPath = location.pathname.replace('-', ' ');
  const isNotHome = location.pathname !== '/';
  const path = isNotHome ? `> ${dummyPath.slice(1, 2).toUpperCase() + dummyPath.slice(2)}` : 'Home';
  return (
    <StyledIntro>
      <div className="info">
        <div className="logo" />
        <p className="title">{isNotHome ? path.slice(2) : 'Home'}</p>
        <p className="location">
          <b>Home</b>
          {' '}
          {isNotHome && <b>{path.charAt(0)}</b>}
          {' '}
          {isNotHome && path.slice(1)}
        </p>
      </div>
    </StyledIntro>
  );
}

export default Intro;
