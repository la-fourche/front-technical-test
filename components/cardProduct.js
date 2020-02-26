const CardProduct = React.forwardRef(
  ({ img, title, price, onClick, href }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        <div className="card" ref={ref}>
          <div className="product-img">
            <img src={img} alt={`img-${title}`} />
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
            margin: 10px;
            min-width: 100px;
            max-width: 200px;
            border-radius: 4px;
            background-color: #fff;
            background-color: var(--mdc-theme-surface, #fff);
            box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
              0px 1px 1px 0px rgba(0, 0, 0, 0.14),
              0px 1px 3px 0px rgba(0, 0, 0, 0.12);
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
