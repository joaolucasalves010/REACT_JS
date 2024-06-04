import { useState, useEffect } from "react";
import "./App.css";

const url = "http://localhost:3000/products";

function App() {
  // 1 - Resgatando dados
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(url);

      const data = await response.json();

      setProducts(data);
    }

    getData();
  }, []);

  return (
    <div className="App">
      <h1>Http em React</h1>
      {/* 1 - Resgate de dados */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R$ {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
