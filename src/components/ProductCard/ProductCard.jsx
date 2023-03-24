import { useContext, React } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../../logic/context/ShopContext';
import StyledDiv from './ProductCard-styles';

function ProductCard({ product }) {
  const context = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <StyledDiv
      onClick={() => {
        navigate(`/product/${product.sku}`);
      }}
    >
      <div className="imgContainer" style={{ backgroundImage: `url(${product.mainImagePath})` }} />
      <div className="productInfo">
        <p className="productName">{product.name}</p>
        <p className="productPrice">{`${context.currentState.priceUnit} ${product.price}`}</p>
      </div>
    </StyledDiv>
  );
}

export default ProductCard;
