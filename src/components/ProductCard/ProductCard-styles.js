import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 287px;
  min-width: 287px;
  cursor: pointer;
  padding-bottom: 20px;
  border-radius: 5px;
  border: none;
  &:hover {
    background-color: rgb(245, 245, 245);
  }
  & .imgContainer {
    width: 100%;
    height: 287px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  & .productInfo {
    width: 100%;
    font-family: 'Poppins';
    font-style: normal;
    margin-top: 14px;
    padding-left: 20px;

    .productName {
      margin-top: 0px;
      margin-bottom: 11px;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }

    .productPrice {
      margin: 0px;
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
    }
  }
`;

export default StyledDiv;
