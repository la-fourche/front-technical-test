import Link from "next/link";
import Pagination from "../../components/pagination";
import CardProduct from "../../components/cardProduct";
import Layout from "../../components/layout";
import { getProducts } from "../../services/products";

const Collection = ({ products, url: { query } }) => {
  return (
    <>
      <Layout>
        <ul className="products-row">
          {products.map(product => {
            return (
              <li key={product.id}>
                <Link
                  href="/products/[slug]"
                  as={`/products/${product.handle}`}
                  passHref
                >
                  <CardProduct
                    img={product.product_image}
                    title={product.title}
                    price={product.price}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
        <Pagination
          path={query.name}
          currentPage={query?.page ? parseInt(query.page) : 0}
        />
      </Layout>
      <style jsx>{`
        li {
          list-style: none;
        }

        .products-row {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  );
};

Collection.getInitialProps = async function(context) {
  const { page } = context.query;
  const products = await getProducts({ page });

  return { products };
};

export default Collection;
