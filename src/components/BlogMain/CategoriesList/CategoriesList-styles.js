import styled from 'styled-components';

const StyledDiv = styled.div.attrs({ className: 'blog__cat-wrapper' })`
  width: 100%;
  margin-bottom: 100px;

  .blog__cat-header {
    margin-block: 40px 33px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
  }

  .blog__cat-list {
    list-style-type: none;
    padding-left: 0px;
    display: flex;
    flex-direction: column;
    row-gap: 40px;

    .blog__category {
      display: flex;
      justify-content: space-between;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #9f9f9f;
      cursor: pointer;
    }
  }

  // Responsiveness
  @media screen and (max-width: 765px) {
    margin-bottom: 30px;
  }
`;

export default StyledDiv;
