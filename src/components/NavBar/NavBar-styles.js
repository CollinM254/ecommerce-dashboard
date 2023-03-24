import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  padding-inline: 7.0694%;
  padding-top: 38px;
  width: 100%;
  height: 100px;
  justify-content: flex-end;

  .navbar__drawer-btn {
    display: none;
  }

  & .routers {
    width: 430px;
    display: flex;
    justify-content: space-between;
    margin-right: 10%;

    a {
      text-decoration: none;
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: black;
    }
  }

  & .actions {
    width: 16.86597%;
    display: flex;
    justify-content: space-between;

    i {
      cursor: pointer;
    }
  }

  .side-cart {
    width: 100%;
    max-width: 417px;
    height: 746px;
    background-color: white;
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 20;

    .cart__top-divider {
      height: 1px;
      width: 100%;
      max-width: 287px;
      background-color: #d9d9d9;
      margin-top: 26px;
      margin-bottom: 42px;
    }

    .cart__upper {
      padding: 27px 40px 0px 27px;

      .cart__top-row {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;

        h4 {
          margin: 0;
        }

        i {
          color: #9f9f9f;
          cursor: pointer;
        }

        i:hover {
          color: black;
        }
      }

      .cart__item-list {
        height: 400px;
        padding-left: 0px;
        margin: 0px;
        overflow-y: scroll;

        li:not(:first-child) {
          margin-top: 10px;
        }
      }

      .cart__empty {
        margin: 0;
        text-align: center;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
      }

      .cart__total {
        display: flex;
        justify-content: space-between;
        margin-top: 100px;

        .cart__subtotal {
          margin: 0px;
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
        }

        .cart__amount {
          margin: 0px;
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          color: #b88e2f;
        }
      }
    }

    .cart__divider {
      width: 100%;
      height: 1px;
      background-color: #d9d9d9;
      margin-top: 23px;
      margin-bottom: 26px;
    }
  }

  // Responsiveness
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 0px;
    width: 100%;
    max-width: 250px;
    height: 60%;
    min-height: 250px;
    max-height: 480px;
    flex-direction: column;
    justify-content: start;
    background-color: white;
    padding-top: 0px;
    padding-inline: 20px 0px;
    transition: transform 0.3s ease-out;
    z-index: 20;
    transform: ${(props) => (props.isDrawerOpen ? 'translateX(0px)' : 'translateX(-250px)')};

    .navbar__drawer-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      top: 10px;
      left: 245px;
      width: 20px;
      cursor: pointer;
      font-size: 20px;
      color: ${(props) => (props.isDrawerOpen ? 'white' : 'black')};
    }

    .routers {
      width: 100%;
      height: 60%;
      justify-content: center;
      gap: 20px;
      margin-right: 0px;
      flex-direction: column;
    }

    .actions {
      margin-top: 30px;
      width: 100%;
      padding-right: 20px;
    }
  }
`;

export default StyledDiv;
