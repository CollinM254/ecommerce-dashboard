import styled from 'styled-components';

const StlyedBanner = styled.div.attrs({ className: 'banner' })`
  width: 100%;
  min-height: 300px;
  padding-inline: 6.94444%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 25px;
  background-color: #faf4f4;
  margin-bottom: 100px;

  .banner__cont {
    width: 30.32258%;
    min-width: 190px;
    height: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      margin: 0px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 48px;
    }

    p {
      max-width: 450px;
      margin: 0px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: #9f9f9f;
    }
  }

  // Responsiveness
  @media only screen and (max-width: 768px) {
    column-gap: 25px;
    justify-content: center;

    .banner__cont {
      text-align: center;
    }
  }
`;

export default StlyedBanner;
