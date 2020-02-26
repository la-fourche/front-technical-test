import Link from "next/link";
import fetch from "isomorphic-unfetch";
import CardProduct from "../components/cardProduct";
import Pagination from "../components/pagination";

const API = "http://localhost:8080";

const Index = ({ products }) => {
  return (
    <>
      <div>
        <p>La fourche</p>
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
        <Pagination />
      </div>
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

Index.getInitialProps = async function() {
  const res = await fetch(`${API}/products?_page=1&_limit=20`);
  const products = await res.json();

  return { products };
};

export default Index;
