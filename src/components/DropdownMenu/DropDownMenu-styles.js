import styled from 'styled-components';

const StyledDropDown = styled.div.attrs({ className: 'dropdown' })`
  .dropdown__header {
    display: inline-flex;
    align-items: center;
    padding-left: 20px;
    width: 190px;
    height: 55px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #9f9f9f;
    background-color: white;
  }

  // Responsiveness
  @media only screen and (max-width: 425px) {
    .dropdown__header {
      font-size: 16px;
      line-height: 25px;
      height: 40px;
      width: 150px;
    }
  }
`;

export default StyledDropDown;
