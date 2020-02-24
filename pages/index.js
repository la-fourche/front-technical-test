import Link from "next/link";
import fetch from "isomorphic-unfetch";

const LIMIT_PER_PAGE = 20;
let ALL_PRODUCTS_LENGTH;

const Index = props => (
  <div className="IndexPage">
    <h1>Products List</h1>
    <div className="ProductsContainer">
      {props.products.map(product => (
        <Link href="/product/[id]" as={`/product/${product.id}`}>
          <div className="ProductThumbnail">
            <span className="ProductName">{product.title}</span>
            <span className="ProductPrice">{product.price}€</span>
            <img
              className="ProductImage"
              src={product.product_image}
              alt={`${product.title} image`}
            />
          </div>
        </Link>
      ))}
    </div>
    <div className="Pagination">
      {props.previousPage && (
        <Link href={{ pathname: "/", query: { p: props.previousPage } }}>
          <span className="PreviousPage">{props.previousPage}</span>
        </Link>
      )}
      <span className="CurrentPage"> / {props.currentPage} / </span>
      {props.nextPage && (
        <Link href={{ pathname: "/", query: { p: props.nextPage } }}>
          <span className="NextPage"> {props.nextPage}</span>
        </Link>
      )}
    </div>
    <style jsx>{`
      h1 {
        font-family: "Arial", sans-serif;
        display: inline-block;
        width: 100%;
        text-align: center;
      }

      .IndexPage {
        position: relative;
        width: 100%;
        height: auto;
      }

      .ProductsContainer {
        width: 1200px;
        height: 1300px;
        margin: auto;
      }

      .ProductThumbnail {
        position: relative;
        width: 200px;
        height: 300px;
        float: left;
        overflow: hidden;
        background-color: rgba(0, 0, 0, 0.5);
        margin: 10px 20px;
      }

      .ProductName {
        font-size: 20px;
        font-family: sans-serif;
        display: inline-block;
        width: 100%;
        text-align: center;
        top: 20px;
        position: relative;
        background-color: rgba(255, 255, 255, 0.75);
      }

      .ProductPrice {
        position: absolute;
        display: inline-block;
        top: 255px;
        width: 100%;
        text-align: center;
        font-size: 25px;
        right: 0px;
        background-color: rgba(255, 255, 255, 0.75);
      }

      .ProductImage {
        height: 100%;
        position: absolute;
        top: 0px;
        right: -30px;
        z-index: -10;
      }

      .Pagination {
        position: relative;
        width: 100%;
        text-align: center;
        font-size: 18px;
      }
    `}</style>
  </div>
);

Index.getInitialProps = async function({ query }) {
  if (!ALL_PRODUCTS_LENGTH) {
    const allProducts = await fetch("http://localhost:8080/products");
    const dataAllProducts = await allProducts.json();
    ALL_PRODUCTS_LENGTH = dataAllProducts.length;
  }

  const products = await fetch(
    `http://localhost:8080/products?_page=${query.p}&_limit=${LIMIT_PER_PAGE}`
  );
  const dataProduct = await products.json();

  const currentPage = query.p ? parseInt(query.p) : 1;

  const previousPage = currentPage - 1 <= 0 ? 1 : currentPage - 1;
  const nextPage =
    (currentPage + 1) * LIMIT_PER_PAGE > ALL_PRODUCTS_LENGTH
      ? currentPage
      : currentPage + 1;

  return {
    totalProducts: ALL_PRODUCTS_LENGTH,
    products: dataProduct,
    currentPage: currentPage,
    previousPage: currentPage > previousPage ? previousPage : null,
    nextPage: currentPage < nextPage ? nextPage : null
  };
};

export default Index;
