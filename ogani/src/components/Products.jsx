export function Products({ product = [] }) {
  return (
    <div className="product__grid">
      {product ? (
        product.map((item, index) => (
          <Product
            key={index}
            name={item.name}
            price={item.price}
            image={item.picture}
          />
        ))
      ) : (
        <div>no products</div>
      )}
    </div>
  );
}
export function Product({ name, price, image }) {
  return (
    <div className="product__view">
      <img className="product__image" src={image} alt="product" />
      <span className="product__name">{name}</span>
      <span className="product__price">{price}</span>
    </div>
  );
}
