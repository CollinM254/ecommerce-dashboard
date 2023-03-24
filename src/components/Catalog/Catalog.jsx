import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import StyledDiv from './Catalog-styles';

function Catalog({ title, description, productList }) {
  const renderedCatalogCards = productList.map((product) => <ProductCard key={product.sku} product={product} />);
  return (
    <StyledDiv>
      <h2>{title}</h2>
      {description ?? <p>{description}</p> }
      <div className="cards-row">{renderedCatalogCards}</div>
      <Link to="/shop">View More</Link>
    </StyledDiv>
  );
}

export default Catalog;
