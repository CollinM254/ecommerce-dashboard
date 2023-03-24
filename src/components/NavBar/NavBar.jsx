import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StyledDiv from './NavBar-styles';
import { ShopContext } from '../../logic/context/ShopContext';
import CartItemTile from './CartItemTile/CartItemTile';

function NavBar({ backgroundColor }) {
  const navigate = useNavigate();
  const [isCartOpen, setCartOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const context = useContext(ShopContext);

  // Variable to hold the list of all
  const renderCartItems = context.currentState.cartProductList.map(
    (cartItem) => (
      <CartItemTile
        key={cartItem.product.sku}
        cartItem={cartItem}
        removeCartItem={() => { context.removeCartItem(cartItem); }}
      />
    ),
  );

  // Function to handle drawer opening & closing
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="backdrop" hidden={!isCartOpen && !isDrawerOpen} onClick={() => { setCartOpen(false); setDrawerOpen(false); }} style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', zIndex: '10' }} />
      <StyledDiv backgroundColor={backgroundColor} isDrawerOpen={isDrawerOpen}>
        <div className="navbar__drawer-btn" onClick={toggleDrawer}>{isDrawerOpen ? <i className="fa-solid fa-xmark" /> : <i className="fa-solid fa-bars" />}</div>
        <div className="routers">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="actions">
          <i
            className="fa-regular fa-user"
            onClick={() => {
              navigate('/my-account');
            }}
          />
          <i className="fa-solid fa-magnifying-glass" />
          <i className="fa-regular fa-heart" />
          <i className="fa-solid fa-cart-shopping" onClick={() => setCartOpen(!isCartOpen)} />
        </div>
        <div className="side-cart" hidden={!isCartOpen}>
          <div className="cart__upper">
            <div className="cart__top-row">
              <h4 className="cart__title">Shopping Cart</h4>
              <i className="fa-regular fa-rectangle-xmark" onClick={() => setCartOpen(!isCartOpen)} />
            </div>
            <div className="cart__top-divider" />
            {context.currentState.cartProductList.length === 0 ? <p className="cart__empty">Your cart is empty. Start shopping!</p> : (
              <ul className="cart__item-list">
                {renderCartItems}
              </ul>
            ) }
            {context.currentState.cartProductList.length === 0 || (
            <div className="cart__total">
              <p className="cart__subtotal">Subtotal</p>
              <p className="cart__amount">{`${context.currentState.priceUnit} ${context.currentState.currentCartSubtotal}`}</p>
            </div>
            ) }

          </div>
          {context.currentState.cartProductList.length === 0 || <div className="cart__divider" />}
          <div className="cart__lower" />
        </div>
      </StyledDiv>
    </>
  );
}

export default NavBar;
