import AddProductButton from '../components/AddProductButton';
import NotifyMeButton from '../components/NotifyMeButton';

const compareAtPriceStyle = {
    textDecoration: 'line-through'
};

const Product = (props: { product: any }) => {
    const product = props.product;
    console.log(product);
    return (
        <>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.handle} />
            <span>{product.price} €</span>
            <span style={compareAtPriceStyle}>{product.compare_at_price}€</span>
            <p>Quantité restante: {product.inventory_quantity}</p>
            <p>Poids: {product.weight}</p>
            <p>SKU: {product.sku}</p>
            <p>Fabriquant: {product.vendor}</p>
            {(() => {
                return 0 !== product.inventory_quantity
                ? <AddProductButton />
                : <NotifyMeButton />
            })()}
        </>
    );
};

Product.getInitialProps = async (ctx: any) => {
    const res = await fetch(`http://api/products/?handle=${ctx.query.handle}`);
    const data = await res.json();

    return {
        product: data[0]
    };
};

export default Product;
