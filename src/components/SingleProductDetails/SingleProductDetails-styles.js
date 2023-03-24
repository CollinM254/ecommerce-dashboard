import styled from 'styled-components';

const StyledDiv = styled.div.attrs({ className: 'singleproduct__details' })`
  .singleproduct__tabs {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 53px;
    margin-bottom: 37px;

    .tab {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 36px;
      cursor: pointer;
    }

    .active {
      color: black;
    }

    .idle {
      color: #9f9f9f;
    }

    .idle:hover {
      color: black;
    }
  }

  .singleproduct__detail-desc {
    width: 100%;
    padding-inline: 14.375%;

    p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-align: justify;
      color: #9f9f9f;
    }
  }

  .singleproduct__image-row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 25px;
    width: 100%;
    padding-inline: 6.9444%;

    .singleproduct__img {
      width: 50%;
      min-width: 260px;
      max-width: 605px;
      aspect-ratio: 1.7385 / 1;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-color: #fff9e6;
      border-radius: 10px;
    }
  }

  .singleproduct__divider {
    height: 1px;
    width: 100%;
    margin-block: 61px 55px;
    background-color: #d9d9d9;
  }

  // Responsiveness
  @media screen and (max-width: 768px) {
    padding-inline: 6.94444%;

    .singleproduct__tabs {
      gap: 20px;
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 1439px) {
    .singleproduct__image-row {
      justify-content: center;
    }
  }
`;

export default StyledDiv;
