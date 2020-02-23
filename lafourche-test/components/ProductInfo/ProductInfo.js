import './ProductInfo.scss'

const ProductInfo = (props) => {
  const { className, product } = props;

  const ProductCta = product.inventory_quantity > 0 ?
    <button type="submit" className="CartCta py-2 px-5 mt-3" >
      <span> Ajouter au panier </span>
    </button> :
    <button type="submit" className="CartCta py-2 px-md-5 mt-3" >
      <span> Me notifier quand le produit est de retour </span>
    </button>;
  
  const StockMessage = product.inventory_quantity > 0 ?
    <span className="ProductAvailable"> { `Il reste ${product.inventory_quantity} exemplaire(s) en stock.` }</span> :
    <span className="SoldOut"> Stock épuisé !</span>;


  const InfoItem = 
    <>
      <h1 className="ProductInfoTitle mt-md-3">
        {product.title}
      </h1>
      <div>
        <span className="ProductVendor">
          {product.vendor}
        </span>
        <span className="ProductWeight">
          {` - ${product.weight}`}
        </span>
      </div>
      <div className="d-flex flex-column mt-3">
        <span className="MembersPrice">
          {formatPrice(product.price)}
        </span>
        <span className="PublicPrice">
          Prix non membre : <s> {formatPrice(product.compare_at_price)} </s>
        </span>
      </div>
      {ProductCta}
      <div className="StockMessage">
        {StockMessage}
      </div>

      <div className="DescriptionSection mt-3">
        <p className="DescriptionTitle"> Description </p>
        <p className="DescriptionContent"> {product.body_html_safe} </p>
      </div>
    </>


  return (
    <div
      className={className}>
        { InfoItem }
    </div>
  )
}

export default ProductInfo;

const formatPrice = (price) => price ? `${parseFloat(price,10).toFixed(2).replace('.', ',')}€`: '';