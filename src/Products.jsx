import { useState, useEffect } from "react";
import Card from "./Card";

function Products({search}) {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch(" https://backende-commerce-un3a.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);
 let filterproducts=products.filter(product=>{
  return product.title.toLowerCase().includes(search.toLowerCase())
 })
  return (
    <>
      <div className="products-container">
        {filterproducts.map((p) => (
          <Card
            key={p.id}
            id={p.id}
            image={p.image}
            title={p.title}
            price={p.price}
          />
        ))}
      </div>
    </>
  );
}

export default Products;