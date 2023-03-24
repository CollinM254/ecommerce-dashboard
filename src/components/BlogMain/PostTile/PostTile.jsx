import React from 'react';
import StyledLi from './PostTile-styles';

function PostTile({ post }) {
  return (
    <StyledLi>
      <img className="postTile__img" src={`${post.imagePath}`} alt="blog" />
      <div className="postTile__info">
        <p className="postTile__title">{post.title}</p>
        <p className="postTile__date">{post.date}</p>
      </div>
    </StyledLi>
  );
}

export default PostTile;
