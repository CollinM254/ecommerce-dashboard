import styled from 'styled-components';

const StyledSizeRow = styled.div`
  margin-top: 22px;
  margin-bottom: 18px;

  p {
    margin-top: 0px;
    margin-bottom: 12px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #9f9f9f;
  }

  .sizeRow {
    display: flex;
    gap: 16px;
    margin: 0px;

    .size {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 5px;
      border: none;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 20px;
      cursor: pointer;
      transition: all 0.2s ease-out;
    }

    .idle {
      background-color: #faf4f4;
    }

    .selected {
      background-color: #fbebb5;
    }
  }
`;

export default StyledSizeRow;
