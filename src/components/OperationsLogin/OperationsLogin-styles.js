import styled from 'styled-components';

const StyledDiv = styled.div.attrs({ className: 'operations__login' })`
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

  p {
    margin-top: 0px;
    margin-bottom: 22px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  .login-form > input {
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

  .login-form > input:focus {
    outline-color: #9f9f9f;
  }

  .login-form {
    .checkbox {
      display: flex;
      align-items: center;
      gap: 21px;
      cursor: pointer;
      margin-bottom: 38px;

      span {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
    }

    .checkbox__box {
      width: 30px;
      height: 27px;
      border: 2px solid #cccccc;
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;

      i {
        text-align: center;
        font-size: 16px;
      }
    }

    .operations__login-btn-row {
      display: flex;
      align-items: center;
      gap: 31px;
      font-family: 'Poppins';
      font-style: normal;

      .submit-btn {
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        padding-block: 17px;
        padding-inline: 78px;
        border-radius: 15px;
        background-color: white;
        border: 1px solid black;
        cursor: pointer;
      }

      .submit-btn:hover {
        background-color: rgb(250, 250, 250);
      }

      a {
        text-decoration: none;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        color: black;
      }

      a:hover {
        font-weight: 500;
      }
    }
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

    .login-form > input {
      height: 50px;
      font-size: 14px;
    }

    .login-form {
      .operations__login-btn-row {
        .submit-btn {
          padding-block: 10px;
          padding-inline: 25px;
          font-size: 15px;
          line-height: 20px;
          border-radius: 10px;
        }

        a {
          font-size: 14px;
        }
      }

      .checkbox {
        span {
          font-size: 14px;
        }
      }

      .checkbox__box {
        width: 25px;
        height: 24px;
      }
    }
  }
`;

export default StyledDiv;
