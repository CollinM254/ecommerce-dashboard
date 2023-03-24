import styled from 'styled-components';

const StyledProductInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #9f9f9f;

  .row {
    width: 100%;
    display: flex;
    gap: 12px;
    margin: 0px;

    .row__left {
      width: 95px;
      display: inline-flex;
      justify-content: space-between;
    }

    .row__share {
      display: flex;
      gap: 25px;
      align-items: center;

      .row__logo {
        width: 21.88px;
        height: 21.88px;
        border: none;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        cursor: pointer;
      }
    }
  }
`;

export default StyledProductInfoCard;
