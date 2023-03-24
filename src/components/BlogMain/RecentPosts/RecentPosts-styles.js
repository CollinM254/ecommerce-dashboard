import styled from 'styled-components';

const StyledDiv = styled.div.attrs({ className: 'recentPosts' })`
  width: 100%;

  .recentPosts__header {
    margin-block: 0px 26px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
  }

  .recentPosts__list {
    padding-left: 0px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  // Responsiveness
  @media screen and (max-width: 765px) {
    margin-bottom: 30px;
  }
`;

export default StyledDiv;
