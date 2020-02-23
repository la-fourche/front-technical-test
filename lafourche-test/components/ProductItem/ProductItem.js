import './ProductItem.scss'
import Link from 'next/link';

const ProductItem = (props) => {
  const formattedUrl = formatProductUrl(props.product.handle);

  return (
    <div className="ProductItem pb-2 h-100 d-flex flex-column">
      <Link href="/product/[handle]" as={formattedUrl} >
        <img
          className="ProductImage w-100 h-auto"
          src={getImageUrl()} />
      </Link>
      <div className="d-flex flex-column flex-grow-1">
        <Link href={formattedUrl} >
          <a className="ProductTitle my-3 mx-md-3 flex-grow-1"> { props.product.title } </a>
        </Link>
        <span
          className="ProductPrice m-3 mt-0">
          { formatPrice(props.product.price) }
        </span>
      </div>
    </div>
  );
}

const formatPrice = (price) => price ? `${parseFloat(price,10).toFixed(2).replace('.', ',')}€`: '';

const formatProductUrl = (handle) => `/product/${handle}`

/* We are gonna use the next method coz all the image links on products.json are broken ! */
const getImageUrl = () => "https://cdn.shopify.com/s/files/1/0009/9565/5740/products/d_252F7_252F2_252F8_252Fd728749ca6f99ac37b40f890a549e945b7eee3cf_Bouteille_En_Inox___1L___Bambaw_468189bf-387b-4f73-9667-874478cae8f1_800x800.jpg?v=1581512015"

export default ProductItem;