import Router, { useRouter } from "next/router";

const Product = props => (
  <div className="ProductPage">
    <div className="BackToHome" onClick={() => Router.back()}>
      Home
    </div>
    <div className="ProductContainer">
      <h1>
        {props.product.title}, by {props.product.vendor}
      </h1>
      <img className="ProductImage" src={props.product.product_image} />
      <p className="ProductDescription">{props.product.body_html_safe}</p>
      <p className="ProductPricing">
        Real price: <b>{props.product.price}€</b> - weight:{" "}
        {props.product.weight}
        <br />
        <strike>instead of {props.product.compare_at_price}€</strike>
      </p>
      <p className="ProductQuantity">
        Quick! There's only {props.product.inventory_quantity} left!
      </p>
      <p className="ProductSKU">
        SKU: <em>{props.product.sku}</em>
      </p>
    </div>
    {props.product.inventory_quantity > 0 ? (
      <div className="AddToBasketButton">Add to basket</div>
    ) : (
      <div className="NotifyButton">Notify me!</div>
    )}
    <style jsx>{`
      h1 {
        font-family: "Arial", sans-serif;
        display: inline-block;
        width: 100%;
        text-align: center;
      }

      .BackToHome {
        width: 50px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        background-color: lightgreen;
        border-radius: 12px;
      }

      .BackToHome:hover {
        cursor: pointer;
      }

      .ProductContainer {
        width: 900px;
        margin: auto;
      }

      .ProductImage {
        margin: auto;
        display: block;
      }

      .AddToBasketButton,
      .NotifyButton {
        width: 150px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: lightgreen;
        border-radius: 20px;
        margin: 30px auto;
      }

      .ProductPrice {
        width: 250px;
      }

      .ProductQuantity {
        width: 250px;
      }

      .ProductDescription {
        width: 550px;
        float: right;
        padding: 0 10px;
      }

      .AddToBasketButton:hover,
      .NotifyButton:hover {
        cursor: pointer;
      }
    `}</style>
  </div>
);

Product.getInitialProps = async function({ query }) {
  console.log("query", query);
  const res = await fetch(`http://localhost:8080/products?id=${query.id}`);
  const data = await res.json();

  console.log(data);

  return {
    product: data[0]
  };
};

export default Product;
