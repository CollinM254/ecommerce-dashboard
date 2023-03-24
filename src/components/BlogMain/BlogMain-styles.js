import styled from 'styled-components';

const StyledMain = styled.main.attrs({ className: 'blog' })`
  width: 100%;
  padding-inline: 6.9444%;
  display: flex;
  column-gap: 25px;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  margin-top: 106px;

  .blog__content {
    width: 65.8871%;
    .blog__list {
      width: 100%;
      padding-left: 0px;
      margin: 0px;
    }
  }
  .blog__side-panel {
    width: 25.0806%;
    min-width: 200px;
  }

  .blog__form input {
    margin-top: 0px;
    height: 58px;
    width: 100%;
    padding-left: 15px;
    border-radius: 10px;
    border: 1px solid #9f9f9f;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  .blog__form input:focus {
    outline-color: #9f9f9f;
  }

  .blog__search i {
    position: relative;
    right: 35px;
    font-size: 20px;
  }

  .blog__search {
    height: 58px;
    display: flex;
    align-items: center;
  }

  // Responsiveness
  @media screen and (max-width: 765px) {
    justify-content: center;
    margin-top: 80px;

    .blog__content {
      width: 100%;
    }

    .blog__side-panel {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }
`;

export default StyledMain;
