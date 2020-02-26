import fetch from "isomorphic-unfetch";

const API = "http://localhost:8080";

const Product = ({ product }) => {
  const handleNotifiedUser = () => {};
  const handleAddToShoppingCart = () => {};

  if (!product) {
    return (
      <div>
        <p>Produit non existant</p>
      </div>
    );
  }

  return (
    <>
      <div>
        <img src={product.product_image} />
        <h2>{product.title}</h2>
        <p>{product.price}€</p>
        <p>
          Prix non membre:{" "}
          <span className="price-notmember">{product.compare_at_price}€</span>
        </p>
        <p>Quantité: {product.inventory_quantity}</p>
        <p>{product.body_html_safe}</p>
        <p>Vendu par {product.vendor}</p>
        <p>Poids: {product.weight}</p>
        <p>SKU: {product.sku}</p>
        <div>
          {product.inventory_quantity > 0 ? (
            <button onClick={handleAddToShoppingCart}>Ajouter au panier</button>
          ) : (
            <button onClick={handleNotifiedUser}>
              Me notifier quand le produit est de retour
            </button>
          )}
        </div>
      </div>
      <style jsx>{`
        .price-notmember {
          text-decoration: line-through;
        }
      `}</style>
    </>
  );
};

Product.getInitialProps = async function(context) {
  const { slug } = context.query;
  const res = await fetch(`${API}/products?handle=${slug}`);
  const product = await res.json();

  return { product: product[0] };
};

export default Product;
