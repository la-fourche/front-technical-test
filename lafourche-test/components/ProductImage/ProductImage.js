import './ProductImage.scss'


const ProductImage = (props) => {

  const { image, className } = props;

  const ImageItem = 
    <img
      className="ProductImage w-100 h-auto p-md-5 p-2"
      src={ formatImage(image) } />

  return (
    <div className={className}>
      {ImageItem}
    </div>
  )
}

export default ProductImage;

/* We are gonna use the next method coz all the image links on products.json are broken ! */
const formatImage = (image) => "https://cdn.shopify.com/s/files/1/0009/9565/5740/products/d_252F7_252F2_252F8_252Fd728749ca6f99ac37b40f890a549e945b7eee3cf_Bouteille_En_Inox___1L___Bambaw_468189bf-387b-4f73-9667-874478cae8f1_800x800.jpg?v=1581512015"