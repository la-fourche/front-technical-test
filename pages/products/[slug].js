import Layout from "../../components/layout";
import { getProduct } from "../../services/products";

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
      <Layout>
        <img
          src={product.product_image}
          onError={({ target }) => {
            target.src =
              "https://cdn.radiofrance.fr/s3/cruiser-production/2019/06/2c4dcdbc-5d49-43c1-a0cc-4650a7ccab09/600x337_download.jpg";
          }}
        />
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
      </Layout>
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
  const product = await getProduct({ slug });

  return { product: product[0] };
};

export default Product;
