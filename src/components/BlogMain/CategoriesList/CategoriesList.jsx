import React, { useContext } from 'react';
import { BlogContext } from '../../../logic/context/BlogContext';
import StyledDiv from './CategoriesList-styles';

function CategoriesList() {
  const context = useContext(BlogContext);

  const renderCategoryCount = Object.keys(context.categoryCount).map((key) => (
    <li key={key} className="blog__category">
      <span>{key}</span>
      <span>{context.categoryCount[key]}</span>
    </li>
  ));

  return (
    <StyledDiv>
      <h5 className="blog__cat-header">Categories</h5>
      <ul className="blog__cat-list">
        {renderCategoryCount}
      </ul>
    </StyledDiv>
  );
}

export default CategoriesList;
