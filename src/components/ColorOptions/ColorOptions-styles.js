import styled from 'styled-components';

const StyledcolorRow = styled.div`
  width: 100%;
  max-width: 424px;
  margin-top: 0px;

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

  .colorRow {
    width: 100%;
    max-width: 122px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px;

    .color {
      cursor: pointer;
      transition: all 0.2s ease-out;
    }

    .idle {
      width: 30px;
      height: 30px;
      border-radius: 15px;
    }

    .selected {
      width: 40px;
      height: 40px;
      border-radius: 20px;
    }
  }
`;

export default StyledcolorRow;
