import styled from 'styled-components';

const StyledFooter = styled.footer.attrs({ className: 'footer' })`
  display: flex;
  flex-direction: column;
  padding-inline: 6.94444%;

  .footer__links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;

    .footer__column {
      height: 312px;
    }

    .column1 {
      max-width: 285px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #9f9f9f;

      p {
        margin: 0px 9.58333% 0px 0px;
      }
    }

    .footer__column a {
      text-decoration: none;
      display: block;
      color: black;
    }

    .footer__column a:not(:last-child) {
      margin-bottom: 46px;
    }

    .footer__column h6 {
      margin-block: 0px 55px;
      color: #9f9f9f;
    }

    .footer__column a,
    .footer__column h6 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }
  }

  .footer__form {
    display: flex;
    gap: 11px;

    input {
      outline: none;
      border: none;
      background-color: white;
      border-bottom: 1px solid black;
      font-family: 'Poppins';
      font-style: normal;
      font-size: 14px;
      line-height: 21px;
    }

    input:first-child {
      min-width: 180px;
      font-weight: 400;
      color: #9f9f9f;
    }

    input:nth-child(2) {
      cursor: pointer;
      font-weight: 600;
      color: black;
      transition: all 0.3s ease-out;

      &:hover {
        background-color: rgb(250, 250, 250);
      }
    }
  }

  .footer__divider {
    height: 1px;
    width: 100%;
    margin-block: 48px 35px;
    background-color: #d9d9d9;
  }

  .rights {
    margin-block: 0px 38px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;

export default StyledFooter;
