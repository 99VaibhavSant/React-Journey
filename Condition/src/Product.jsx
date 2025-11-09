import "./Product.css"

function Product({ Name, Price}) {
  // let discount = Price >= 1000 ? <p>Discount of 5%</p> : null  
  let discount = Price >= 1000 ? <p>{Price * 5 / 100}</p> : null  
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

