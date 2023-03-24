import React, { useContext } from 'react';
import { ShopContext } from '../../logic/context/ShopContext';
import DropDownMenu from '../DropdownMenu/DropDownMenu';
import StyledBand from './FilterBand-styles';

function FilterBand() {
  const context = useContext(ShopContext);
  const { currentPageIndex, productsPerPage, productList, pageQty } = context.currentState;

  // Finding total number of products, which is the length of productList
  const total = productList.length;

  // First item of the ones shown in this page
  const firstItem = currentPageIndex === 1 ? 1 : 1 + ((currentPageIndex - 1) * productsPerPage);

  // Last item of the ones shown in this page
  const lastItem = currentPageIndex === pageQty ? productList.length : currentPageIndex * productsPerPage;

  return (
    <StyledBand>
      <div className="filter__left">
        <span className="filter__filter-btn">
          <i className="fa-solid fa-sliders" />
          {' '}
          Filter
        </span>
        <i className="fa-solid fa-grip" />
        <i className="fa-solid fa-list" />
        <div className="filter__divider" />
        <span className="filter__count">{`Showing ${firstItem} - ${lastItem} out of ${total}`}</span>
      </div>
      <div className="filter__right">
        <span>Show</span>
        <DropDownMenu items={[16, 32, 48, 'All']} />
        <div className="filter__right-cont">
          <span className="sort">Sort by</span>
          <DropDownMenu items={['Default', 'Price Lowest to Highest', 'Price Highest to Lowest', 'Newest']} />
        </div>

      </div>
    </StyledBand>
  );
}

export default FilterBand;
