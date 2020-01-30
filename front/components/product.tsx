import Link from 'next/link';

const Product = (props: any) => {
  const { product } = props;
  const { title, image, price, objectID } = product;
  return (
    <div style={{ padding: '30px' }}>
      <h2><Link href={`/product?id=${objectID}`}>{title}</Link></h2>
      <img src={image} style={{ width: '100px' }} />
      <p>{price}€</p>
    </div>
  );
};

export default Product;