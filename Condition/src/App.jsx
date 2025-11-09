import Product from "./Product.jsx"
import "./App.css"
function App() {
  return (
    <div className="rap">
      <Product Name ="Laptop" Price={9999}/>
      <Product Name ="Playstation" Price={49000}/>
      <Product Name="Smartphone" Price={29999}/>
      <Product Name="Headphones" Price={1999}/>
      <Product Name="Smartwatch" Price={15000}/>
      <Product Name="Tablet" Price={25000}/>
    </div>
  )
}

export default App
