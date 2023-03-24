import React from 'react';
import StyledLi from './BlogTile-styles';

function BlogTile({ post }) {
  return (
    <StyledLi>
      <div className="blog__post-img" style={{ backgroundImage: `url(${post.imagePath})` }} />
      <div className="blog__post-info">
        <span>
          <i className="fa-solid fa-user" />
          {' '}
          {post.author}
        </span>
        <span>
          <i className="fa-solid fa-calendar" />
          {' '}
          {post.date}
        </span>
        <span>
          <i className="fa-solid fa-tag" />
          {' '}
          {post.category}
        </span>
      </div>
      <h4 className="blog__post-title">{post.title}</h4>
      <p className="blog__post-content">{post.content}</p>
      <button className="blog__read-btn">Read more</button>
    </StyledLi>
  );
}

export default BlogTile;
