import styled from 'styled-components';

const StyledLi = styled.li.attrs({ className: 'blog__post' })`
  width: 100%;
  display: flex;
  flex-direction: column;

  .blog__post-img {
    width: 100%;
    aspect-ratio: 1.634 / 1;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
  }

  .blog__post-info {
    display: flex;
    gap: 36px;
    margin-block: 17px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #9f9f9f;

    i {
      margin-right: 8px;
    }
  }

  .blog__post-title {
    margin: 0px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 45px;
  }

  .blog__post-content {
    margin: 12px 0px 0px 0px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 150%;
    text-align: justify;
    color: #9f9f9f;
  }

  .blog__read-btn {
    width: fit-content;
    padding-inline: 0px;
    padding-block: 0px 12px;
    margin-block: 30px 54px;
    border: none;
    border-bottom: 2px solid black;
    cursor: pointer;
    background: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
  }

  // Responsiveness
  @media screen and (max-width: 765px) {
  }
`;

export default StyledLi;
