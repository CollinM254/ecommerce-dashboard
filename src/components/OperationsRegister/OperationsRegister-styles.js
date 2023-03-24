import styled from 'styled-components';

const StyledDiv = styled.div.attrs({ className: 'operations__register' })`
  width: 50%;
  height: 537px;
  max-width: 423px;
  min-width: 290px;
  display: inline-flex;
  flex-direction: column;

  h3 {
    margin-top: 0px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
  }

  p:first-child {
    margin-top: 0px;
    margin-bottom: 22px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  p:not(:first-child) {
    margin-top: 0px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    text-align: justify;
  }

  b {
    font-weight: 500;
  }

  .desc1 {
    margin-block: 0px 18px;
  }

  .desc2 {
    margin-top: 0px;
    margin-bottom: 64px;
  }

  .register-form > input:not(:last-child) {
    margin-top: 0px;
    margin-bottom: 36px;
    height: 75px;
    width: 100%;
    max-width: 423px;
    padding-left: 15px;
    border-radius: 10px;
    border: 1px solid #9f9f9f;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  .register-form > input:focus {
    outline-color: #9f9f9f;
  }

  .register-btn {
    justify-self: end;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 17px;
    padding-inline: 67px;
    border-radius: 15px;
    background-color: white;
    border: 1px solid black;
    cursor: pointer;
  }

  .register-btn:hover {
    background-color: rgb(250, 250, 250);
  }

  // Responsiveness
  @media screen and (max-width: 1024px) {
    width: 100%;
    max-width: 800px;
  }

  @media screen and (max-width: 425px) {
    height: fit-content;

    h3 {
      margin-bottom: 20px;
    }

    p:first-child {
      font-size: 14px;
      line-height: 20px;
    }

    p:not(:first-child) {
      font-size: 14px;
      line-height: 20px;
    }

    .desc2 {
      margin-bottom: 25px;
    }

    .register-form > input:not(:last-child) {
      height: 50px;
      font-size: 14px;
    }

    .register-btn {
      padding-block: 10px;
      padding-inline: 25px;
      font-size: 15px;
      line-height: 20px;
      border-radius: 10px;
    }
  }
`;

export default StyledDiv;
