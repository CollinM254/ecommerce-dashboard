import { useContext, useState, React, useEffect } from 'react';
import CartOperationsRow from '../CartOperationsRow/CartOperationsRow';
import ColorOptions from '../ColorOptions/ColorOptions';
import { ShopContext } from '../../logic/context/ShopContext';
import ProductInfoCard from '../ProductInfoCard/ProductInfoCard';
import ReviewStars from '../ReviewStars/ReviewStars';
import SizeOptions from '../SizeOptions/SizeOptions';
import StyledMain from './SingleProductMain-styles';
import SingleProductDetails from '../SingleProductDetails/SingleProductDetails';

function SingleProductMain({ product }) {
  const [currentImg, setCurentImg] = useState(product.mainImagePath);
  const context = useContext(ShopContext);

  const allImages = product.allImages.map((img, index) => (
    <div
      key={index}
      className="smallImage"
      style={{ backgroundImage: `url(${img})` }}
      onClick={() => {
        setCurentImg(img);
      }}
    />
  ));

  return (
    <>
      <StyledMain>
        <div className="productImages">
          <div className="previewColumn">{allImages}</div>
          <div className="mainImage" style={{ backgroundImage: `url(${currentImg})` }} />
        </div>
        <div className="productOperations">
          <p className="title">{product.name}</p>
          <div className="price">
            <span>{`${context.currentState.priceUnit} ${product.price}`}</span>
            {' '}
            <i className="fa-regular fa-heart" onClick={() => {}} />
          </div>
          <div className="reviews">
            <ReviewStars score={product.reviewScore} />
            <div className="reviewDivider" />
            <span>{`${product.reviews.length} Customer Review`}</span>
          </div>
          <p className="description">{product.description}</p>
          <SizeOptions sizeOptions={product.sizeOptions} />
          <ColorOptions colorOptions={product.colorOptions} />
          <CartOperationsRow product={product} />
          <div className="operationsDivider" />
          <ProductInfoCard product={product} />
        </div>
      </StyledMain>
      <div className="divider" style={{ height: '1px', width: '100%', backgroundColor: '#d9d9d9', marginBottom: '48px' }} />
      <SingleProductDetails product={product} />
    </>

  );
}

export default SingleProductMain;
