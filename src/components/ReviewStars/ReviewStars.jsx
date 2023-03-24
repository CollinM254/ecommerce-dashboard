import React from 'react';
import StyledStar from './ReviewStars-styles';

function ReviewStars({ score }) {
  const stars = [];
  if (score !== null) {
    const scoreInt = Math.floor(score);
    const scoreFloat = score - scoreInt;

    for (let i = 1; i <= scoreInt; i++) {
      stars.push(<i key={i} className="fa-solid fa-star" />);
    }

    if (scoreFloat !== 0) {
      stars.push(<i key="float" className="fa-regular fa-star-half-stroke" />);
    }

    const { length } = stars;

    for (let j = 5; j > length; j--) {
      stars.push(<i key={j} className="fa-regular fa-star" />);
    }
  } else {
    for (let k = 0; k < 5; k++) {
      stars.push(<i key={k} className="fa-regular fa-star" />);
    }
  }

  return <StyledStar>{stars}</StyledStar>;
}

export default ReviewStars;
