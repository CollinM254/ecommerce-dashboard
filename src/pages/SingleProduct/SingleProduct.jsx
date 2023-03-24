import { useContext, React } from 'react';
import { useParams } from 'react-router-dom';
import Catalog from '../../components/Catalog/Catalog';
import Footer from '../../components/Footer/Footer';
import InfoRow from '../../components/InfoRow/InfoRow';
import NavBar from '../../components/NavBar/NavBar';
import SingleProductMain from '../../components/SingleProductMain/SingleProductMain';
import { ShopContext } from '../../logic/context/ShopContext';

function SingleProduct() {
  const { productSku } = useParams();
  const context = useContext(ShopContext);
  const displayedProduct = context.getProduct(productSku);
  const relatedProducts = context.getRelatedProducts(displayedProduct.category);

  return (
    <div className="singleProduct">
      <NavBar />
      <InfoRow productName={displayedProduct.name} />
      <SingleProductMain product={displayedProduct} />
      <Catalog title="Related Products" productList={relatedProducts} />
      <Footer />
    </div>
  );
}

export default SingleProduct;
