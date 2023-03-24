import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  margin-top: 63px;

  .operations {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-inline: 6.9444%;
    column-gap: 14.722222%;
    row-gap: 35px;
    width: 100%;
    margin-bottom: 125px;
  }

  // Responsiveness
  @media screen and (max-width: 1024px) {
    .operations {
      margin-bottom: 50px;
    }
  }

  @media screen and (max-width: 425px) {
    .banner {
      margin-bottom: 0px;
    }
  }
`;

export default StyledDiv;
