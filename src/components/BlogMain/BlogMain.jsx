import React, { useContext, useEffect } from 'react';
import { BlogContext } from '../../logic/context/BlogContext';
import ButtonRow from '../ButtonRow/ButtonRow';
import StyledMain from './BlogMain-styles';
import BlogTile from './BlogTile/BlogTile';
import CategoriesList from './CategoriesList/CategoriesList';
import RecentPosts from './RecentPosts/RecentPosts';

function BlogMain() {
  const context = useContext(BlogContext);

  const renderPosts = context.currentState.renderedBlogList.map((post) => <BlogTile key={post.postID} post={post} />);

  return (
    <StyledMain>
      <div className="blog__content">
        <ul className="blog__list">
          {renderPosts}
        </ul>
        <ButtonRow contextToRender={BlogContext} />
      </div>
      <div className="blog__side-panel">
        <form className="blog__form">
          <div className="blog__search">
            <input type="text" />
            <i className="fa-solid fa-magnifying-glass" />
          </div>
        </form>
        <CategoriesList />
        <RecentPosts />
      </div>
    </StyledMain>
  );
}

export default BlogMain;
