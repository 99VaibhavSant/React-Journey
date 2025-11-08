import "./Product.css"
function Product({ Title, Price }) {
  return (
    <div className="product-card">
      <h4>{Title}</h4>
      <p>{Price}</p>
      <button>Buy</button>
    </div>
  );
}

export default Product