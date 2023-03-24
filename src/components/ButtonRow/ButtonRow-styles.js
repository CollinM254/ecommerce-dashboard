import styled from 'styled-components';

const StyledRow = styled.div.attrs({ className: 'button-row' })`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 38px;
  margin-top: 0px;

  & button {
    text-align: center;
    padding: 15px 28px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease-out;

    &:hover {
      background-color: #fbebb5;
    }
  }

  .idle {
    background-color: #fff9e5;
  }
  .active {
    background-color: #fbebb5;
  }

  & .disabled {
    background-color: rgb(240, 240, 240);
  }

  & .disabled:hover {
    background-color: rgb(240, 240, 240);
    cursor: not-allowed;
  }

  // Responsiveness

  @media only screen and (max-width: 768px) {
    gap: 15px;

    & button {
      padding: 7.5px 14px;
      font-size: 16px;
      line-height: 22px;
      border-radius: 5px;
    }
  }
`;

export default StyledRow;
