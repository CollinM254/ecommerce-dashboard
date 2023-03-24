import styled from 'styled-components';

const StyledLi = styled.li.attrs({ className: 'cart__cart-item' })`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
  padding-left: 0px;

  .cart__item-img {
    width: 105px;
    height: 105px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #fbebb5;
  }

  .cart__item-info {
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 11px;

    .cart__item-order {
      margin: 0px;
      word-spacing: 0.4em;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;

      span {
        color: #b88e2f;
      }
    }

    .cart__item-name {
      margin: 0px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
  }

  i {
    align-self: center;
    color: #9f9f9f;
    cursor: pointer;
  }

  i:hover {
    color: black;
  }

  // Responsiveness
  @media only screen and (max-width: 424px) {
    .cart__item-img {
      width: 80px;
      height: 80px;
    }

    .cart__item-info {
      gap: 5px;

      .cart__item-name {
        font-size: 12px;
      }
    }
  }
`;

export default StyledLi;
