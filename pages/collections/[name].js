import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Pagination from "../../components/pagination";
import CardProduct from "../../components/cardProduct";

const API = "http://localhost:8080";

const Collection = ({ products, url: { query } }) => {
  return (
    <>
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

  const res = await fetch(
    `${API}/products?_page=${!page ? `0` : page}&_limit=20`
  );

  const products = await res.json();

  return { products };
};

export default Collection;
