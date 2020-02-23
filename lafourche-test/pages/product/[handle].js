import ErrorPage from 'next/error'

import DefaultLayout from '~/layouts/DefaultLayout';

import ProductImage from '~/components/ProductImage/ProductImage';
import ProductInfo from '~/components/ProductInfo/ProductInfo';

import getProduct from '~/services/product';

const Product = (props) => {
 
  const { product, err } = props;

  if (err) return <ErrorPage statusCode={err.statusCode} />;

  const TITLE = `La Fourche | ${product.title} `;

  const productItem = product ?
    <div className="row m-0 p-0 container-fluid justify-content-center mt-md-5">
      <ProductImage
        className="col-md-4 bg-white m-md-0 "
        image={product.image} />
      <ProductInfo
        className="col-md-4 bg-white m-md-0"
        product={product} /> 
    </div>
    : null;

  return (
    <>
      <DefaultLayout title={TITLE}>
        { productItem }
      </DefaultLayout>
    </>
  )
}

Product.getInitialProps = async function({query}) {
  let { handle } = query;
  try {
    const res = await getProduct(handle);
    return {
      product: res,
    };
  }
  catch(err) {
    return { err: { statusCode: err.status } }
  }
};

export default Product;