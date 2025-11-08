import Product from "./Product.jsx"
import "./ProductTab.css"

function ProductTab(){
    return(
        <div className="ProductTab">
            <Product Title="Laptop" Price={30000}  />
            <Product Title="Playstation" Price={50000} />
            <Product Title="Phone" Price={9999} />
            <Product Title="Tv" Price={14000} />
        </div>
    )
}
export default ProductTab