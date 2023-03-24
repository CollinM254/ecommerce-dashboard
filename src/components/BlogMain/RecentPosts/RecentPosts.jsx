import React, { useContext } from 'react';
import { BlogContext } from '../../../logic/context/BlogContext';
import PostTile from '../PostTile/PostTile';
import StyledDiv from './RecentPosts-styles';

function RecentPosts() {
  const context = useContext(BlogContext);

  const renderPosts = context.currentState.blogList.slice(0, 5).map(
    (post) => <PostTile key={post.postID} post={post} />,
  );
  return (
    <StyledDiv>
      <h5 className="recentPosts__header">Recent posts</h5>
      <ul className="recentPosts__list">
        {renderPosts}
      </ul>
    </StyledDiv>
  );
}

export default RecentPosts;
