import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 6.9444%;

  h2 {
    margin-top: 0px;
    margin-bottom: 13px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
  }

  .cards-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  a {
    text-decoration: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: black;
    margin-top: 73px;
    margin-bottom: 103px;
    padding-bottom: 19px;
    border-bottom: 2px solid black;
    cursor: pointer;
  }

  // Responsiveness
  @media screen and (max-width: 768px) {
    .cards-row {
      justify-content: center;
    }
  }

  @media screen and (max-width: 374px) {
    h2 {
      text-align: center;
    }
  }
`;

export default StyledDiv;
