import styled from 'styled-components';

const StyledBand = styled.div`
  width: 100%;
  margin-top: 47px;
  padding-inline: 6.9444%;
  padding-block: 35px;
  background-color: #faf4f4;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 20px;

  .filter__left {
    display: flex;
    gap: 25px;
    align-items: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;

    span:not(:last-child),
    i {
      cursor: pointer;
    }

    .filter__divider {
      width: 2px;
      height: 37px;
      background-color: #9f9f9f;
    }
  }

  .filter__right {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
    gap: 17px;

    span {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
    }

    .filter__right-cont {
      display: flex;
      align-items: center;
      column-gap: 15px;
    }
  }

  // Responsiveness
  @media only screen and (max-width: 425px) {
    padding-block: 20px;

    .filter__left,
    .filter__right span {
      font-size: 16px;
    }

    .filter__left {
      gap: 15px;

      .filter__filter-btn {
        min-width: 65px;
      }
    }

    .filter__count {
      max-width: 150px;
    }
  }
`;

export default StyledBand;
