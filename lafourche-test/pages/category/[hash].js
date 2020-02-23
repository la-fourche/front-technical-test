import ErrorPage from 'next/error'

import DefaultLayout from '~/layouts/DefaultLayout';

import ProductItem from '~/components/ProductItem/ProductItem';
import Pagination from '~/components/Pagination/Pagination';

import getProducts from '~/services/category';

const TITLE = 'La Fourche | Here goes category title';

const PAGE_PRODUCTS_LIST_SIZE = 20;
const CATEGORY_PRODUCTS_SIZE = 100; // supposed to come from the back end

const Category = (props) => {
  const { products, page, hash, err } = props;

  if (err) return <ErrorPage statusCode={err.statusCode} />;

  const productItems = products ?
    <ul className="row list-unstyled container-fluid p-3 mx-0">
      {
        products.map((p, index) =>
          <li key={p.handle} className="col-6 col-md-4 col-lg-3 py-2 p-md-3 m-0 p-0 px-2">
            <ProductItem product={p} />
          </li>
        )
      }
    </ul> : null;

  return (
    <>
      <DefaultLayout title={TITLE}>
        { productItems }
        <Pagination
          className="align-items-center justify-content-center w-100 mb-5"
          size={ CATEGORY_PRODUCTS_SIZE }
          limit={ PAGE_PRODUCTS_LIST_SIZE }
          page={ page }
          baseUrl={ `/category/${hash}` }
          route="/category/[hash]" />
      </DefaultLayout>
    </>
  )
}

Category.getInitialProps = async function({query}) {
  let { page, hash } = query;

  page = page ? parseInt(page) : 1; 
  if(isNaN(page)) page = 1;
  
  try {
    const res = await getProducts(page, PAGE_PRODUCTS_LIST_SIZE);
    return {
      products: res,
      page,
      hash,
    };
  }
  catch(err) {
    return { err: { statusCode: err.status } }
  }
};

export default Category;