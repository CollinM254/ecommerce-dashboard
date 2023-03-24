import React, { useContext } from 'react';
import { ShopContext } from '../../../logic/context/ShopContext';
import StyledLi from './CartItemTile-styles';

function CartItemTile({ cartItem, removeCartItem }) {
  const context = useContext(ShopContext);
  return (
    <StyledLi>
      <div className="cart__item-img" style={{ backgroundImage: `url(${cartItem.product.mainImagePath})` }} />
      <div className="cart__item-info">
        <p className="cart__item-name">{cartItem.product.name}</p>
        <p className="cart__item-order">
          {`${cartItem.quantity} X `}
          <span>{`${context.currentState.priceUnit} ${cartItem.product.price}`}</span>
        </p>
      </div>
      <i className="fa-solid fa-circle-xmark" onClick={removeCartItem} />
    </StyledLi>
  );
}

export default CartItemTile;
