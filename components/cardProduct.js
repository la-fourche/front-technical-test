const CardProduct = React.forwardRef(
  ({ img, title, price, onClick, href }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        <div className="card" ref={ref}>
          <div className="product-img">
            <img src={img} />
          </div>
          <h2>{title}</h2>
          <p>{price}€</p>
        </div>
        <style jsx>{`
          a {
            text-decoration: none;
            color: black;
          }

          .card {
            border: 1px solid red;
            margin: 10px;
            min-width: 100px;
            max-width: 200px;
          }

          .product-img > img {
            width: 100%;
            height: 160px;
            object-fit: cover;
          }
        `}</style>
      </a>
    );
  }
);

export default CardProduct;
