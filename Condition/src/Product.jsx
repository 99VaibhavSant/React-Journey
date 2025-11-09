import "./Product.css"

function Product({ Name, Price}) {

// - Created Product component that accepts 'Name' and 'Price' as props.
// - Implemented conditional rendering using the ternary operator.
// - If Price is greater than or equal to 1000, a discount (5% of the price) is displayed.
// - Demonstrates how to store conditional JSX in a variable (discount) for cleaner code.
// - Added basic CSS styling through 'Product.css'.


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

