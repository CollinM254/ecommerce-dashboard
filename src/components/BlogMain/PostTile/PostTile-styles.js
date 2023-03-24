import styled from 'styled-components';

const StyledLi = styled.li.attrs({ className: 'postTile' })`
  width: 100%;
  height: 80px;
  display: flex;
  gap: 12px;

  .postTile__img {
    width: 80px;
    height: 80px;
    border-radius: 10px;
  }

  .postTile__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    .postTile__title {
      margin: 0px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
    }

    .postTile__date {
      margin: 0px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: #9f9f9f;
    }
  }
`;

export default StyledLi;
