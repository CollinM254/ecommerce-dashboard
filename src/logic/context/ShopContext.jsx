import { createContext, useEffect, useState, React } from 'react';
import mockData from '../mock-data/mockData';
import CartItem from '../models/CartItem';

export const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [currentState, setCurrentState] = useState({
    productList: [], // List for all the products we have
    currentPageList: [], // List for all the products in current page
    renderedProductList: [], // List for all the products displayed in current page
    currentPageIndex: 1,
    pageQty: 0,
    productsPerPage: 16,
    cartProductList: [], // List for keeping all the items added to cart
    priceUnit: 'RS', // Selected price unit
    currentCartItemColor: null, // Used as selected color option for current product when it's added to cart.
    currentCartItemSize: null, // Used as selected size option for current product when it's added to cart.
    currentCartItemQty: 1, // Used as quantity for current product when it's added to cart.
    currentCartSubtotal: 0,
  });

  // Function to fetchData from api and calculate how many pages there will be.
  // For the sake of this exercise, we will use mockData since we don't have an api.
  function fetchData() {
    const newState = { ...currentState };

    newState.productList = mockData;

    // This is where we calculate the number of pages.
    newState.pageQty = Math.ceil(newState.productList.length / newState.productsPerPage);

    if (newState.pageQty === 1) {
      newState.currentPageList = [...newState.productList];
    } else {
      newState.currentPageList = newState.productList.slice(0, newState.productsPerPage);
      newState.renderedProductList = [...newState.currentPageList];
    }
    setCurrentState(newState);
  }

  // This useEffect will enable us to run fetchData in mounting stage only.
  useEffect(() => {
    fetchData();
  }, []);

  // Fucntion to execute for numbered page buttons
  const updatePage = (index) => {
    if (currentState.currentPageIndex !== index) {
      const newState = { ...currentState };

      if (index !== newState.pageQty) {
        newState.currentPageList = newState.productList.slice(
          newState.productsPerPage * (index - 1),
          newState.productsPerPage * index,
        );
      } else {
        newState.currentPageList = newState.productList.slice(
          newState.productsPerPage * (index - 1),
        );
      }

      newState.renderedProductList = [...newState.currentPageList];
      newState.currentPageIndex = index;
      setCurrentState(newState);
    }
  };

  // Function to execute for next & previous buttons
  const updatePageAlt = (btn) => {
    if (btn === 'next') {
      if (currentState.currentPageIndex < currentState.pageQty) {
        const newState = { ...currentState };
        newState.currentPageIndex++;
        if (newState.currentPageIndex !== newState.pageQty) {
          newState.currentPageList = newState.productList.slice(
            newState.productsPerPage * (newState.currentPageIndex - 1),
            newState.productsPerPage * newState.currentPageIndex,
          );
        } else {
          newState.currentPageList = newState.productList.slice(
            newState.productsPerPage * (newState.currentPageIndex - 1),
          );
        }
        newState.renderedProductList = [...newState.currentPageList];
        setCurrentState(newState);
      }
    } else if (currentState.currentPageIndex > 1) {
      const newState = { ...currentState };
      newState.currentPageIndex--;
      newState.currentPageList = newState.productList.slice(
        newState.productsPerPage * (newState.currentPageIndex - 1),
        newState.productsPerPage * newState.currentPageIndex,
      );
      newState.renderedProductList = [...newState.currentPageList];
      setCurrentState(newState);
    }
  };

  // Function returns the Product object which matches the given sku.
  const getProduct = (sku) => {
    const dummy = mockData.filter((product) => product.sku === sku);
    return dummy[0];
  };

  // Returns 4 products with same category
  const getRelatedProducts = (category) => {
    const dummy = mockData.filter((product) => product.category === category);
    return dummy.length <= 4 ? dummy : dummy.slice(0, 4);
  };

  // Used to update current color option everytime user clicks on a color.
  const updateColorOption = (color) => {
    const newState = { ...currentState };
    newState.currentCartItemColor = color;
    setCurrentState(newState);
  };

  // Used to update current size option everytime user clicks on size.
  const updateSizeOption = (size) => {
    const newState = { ...currentState };
    newState.currentCartItemSize = size;
    setCurrentState(newState);
  };

  // Used to update current quantity of the product to be added into cart.
  const updateCartQuantity = (qty) => {
    const newState = { ...currentState };
    newState.currentCartItemQty = qty;
    setCurrentState(newState);
  };

  // Used to add a CartItem to the cartProductList with current size & color options.
  const addToCart = (product) => {
    const addedItem = new CartItem(
      product,
      currentState.currentCartItemQty,
      currentState.currentCartItemColor,
      currentState.currentCartItemSize,
    );
    const newState = { ...currentState };

    const searchCurrentList = newState.cartProductList.findIndex((itm) => itm.product.sku === product.sku);

    if (searchCurrentList > -1) {
      newState.cartProductList[searchCurrentList].quantity += addedItem.quantity;
    } else {
      newState.cartProductList.push(addedItem);
    }

    newState.currentCartSubtotal += (addedItem.quantity * addedItem.product.price);
    newState.currentCartItemQty = 1;
    newState.currentCartItemColor = null;
    newState.currentCartItemSize = null;
    setCurrentState(newState);
  };

  // Used to remove a CartItem from the cartProductList
  const removeCartItem = (cartItem) => {
    const newState = { ...currentState };
    const searchCurrentList = newState.cartProductList.findIndex((itm) => itm.product.sku === cartItem.product.sku);

    if (searchCurrentList > -1) {
      newState.cartProductList.splice(searchCurrentList, 1);
      newState.currentCartSubtotal -= (cartItem.quantity * cartItem.product.price);
    }

    setCurrentState(newState);
  };

  return (
    <ShopContext.Provider
      value={{
        currentState,
        updatePage,
        updatePageAlt,
        getProduct,
        getRelatedProducts,
        updateColorOption,
        updateSizeOption,
        updateCartQuantity,
        addToCart,
        removeCartItem,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
