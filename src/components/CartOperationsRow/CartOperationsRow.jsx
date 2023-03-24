import { useState, React, useContext } from 'react';
import { ShopContext } from '../../logic/context/ShopContext';
import StyledCartOperations from './CartOperationsRow-styles';

function CartOperationsRow({ product }) {
  const context = useContext(ShopContext);
  const [quantity, setQuantity] = useState(1);
  return (
    <StyledCartOperations>
      <div className="quantity">
        <span
          className="qtyButton"
          onClick={() => {
            if (quantity !== 1) {
              const newQty = quantity - 1;
              setQuantity(newQty);
              context.updateCartQuantity(newQty);
            }
          }}
        >
          -
        </span>
        <span className="qty">{quantity}</span>
        <span
          className="qtyButton"
          onClick={() => {
            const newQty = quantity + 1;
            setQuantity(newQty);
            context.updateCartQuantity(newQty);
          }}
        >
          +
        </span>
      </div>
      <button
        type="submit"
        className="addToCart"
        onClick={() => {
          context.addToCart(product);
        }}
      >
        Add To Cart
      </button>
    </StyledCartOperations>
  );
}

export default CartOperationsRow;
