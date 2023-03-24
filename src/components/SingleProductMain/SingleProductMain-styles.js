import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-inline: 6.94444%;
  justify-content: space-between;
  margin-bottom: 56px;

  & .productImages {
    width: 42.74%;
    display: flex;
    justify-content: space-between;

    .previewColumn {
      display: flex;
      flex-direction: column;
      width: 76px;
      row-gap: 32px;

      .smallImage {
        width: 100%;
        aspect-ratio: 1/ 1.0526;
        background-position: center;
        background-size: cover;
        background-color: #fff9e6;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-out;
      }

      .smallImage:hover {
        background-color: #fbebb5;
      }
    }

    .mainImage {
      width: 79.811%;
      aspect-ratio: 1 / 1.1574;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      background-color: #fff9e6;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease-out;
    }
  }

  & .productOperations {
    width: 48.872%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .title {
      margin: 0px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 42px;
      line-height: 63px;
    }

    .price {
      max-width: 424px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;

      span {
        color: #9f9f9f;
      }
    }
    .reviews {
      margin-top: 10px;
      margin-bottom: 0px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 22px;

      span {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;
        color: #9f9f9f;
      }
    }

    .reviewDivider {
      height: 30px;
      width: 1px;
      background-color: #9f9f9f;
    }

    .description {
      margin-top: 13px;
      margin-bottom: 0px;
      max-width: 424px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 20px;
    }

    .operationsDivider {
      width: 100%;
      height: 1px;
      background-color: #d9d9d9;
      margin-top: 60px;
      margin-bottom: 41px;
    }
  }

  // Responsiveness
  @media screen and (max-width: 1024px) and (min-width: 769px) {
    & .productImages {
      width: 44%;

      .mainImage {
        height: 70%;
      }
    }
  }

  @media screen and (max-width: 768px) {
    justify-content: center;

    & .productImages {
      width: 100%;
      min-width: 30px;
      gap: 20px;

      .previewColumn {
        width: 100px;
      }

      .mainImage {
        width: 100%;
        max-height: 280px;
      }
    }

    & .productOperations {
      width: 100%;

      .title {
        margin-top: 15px;
        margin-bottom: 10px;
        font-size: 32px;
        line-height: 45px;
      }
    }
  }
`;

export default StyledMain;
