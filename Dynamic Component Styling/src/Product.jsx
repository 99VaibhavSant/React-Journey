import "./Product.css"

function Product({ Name, Price}) {
let condition = {
  color: Price >= 10000 ? "green" : "red",
}

  let discount = Price >= 1000 ? <p style={condition}>{Price * 5 / 100}</p> : null  
  return (
    <div className="Product">
      <h1>Product Name {Name}</h1>
      <h4>Price is {Price}</h4>
      {/* {Price >=1000 ? <p>Discount5%</p> :null }       */}
      {discount}
    </div>
  );
}
export default Product;

