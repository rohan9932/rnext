import { useState } from "react";
import AddProduct from "./components/AddProduct";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
function App() {
  const [prod, setProd] = useState(null);

  const handleSetProduct = (id) => {
    setProd(id);
  };
  
  return (
    <div className="flex m-2">
      <AddProduct />
      <ProductList setProd={handleSetProduct}/>
      {
        prod ? <ProductDetails id={prod} /> : "Select a product to view details"
      }
    </div>
  );
}

export default App;
