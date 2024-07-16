import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import SpriteZero from "../images/SpriteZero.png"
import Powerade from "../images/Powerade.webp"
import Fanta from "../images/Fanta.jpg"
import Coca from "../images/Coca.jpg"
import Pepsi from "../images/Pepsi.jpg"
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://6658a4035c361705264950b5.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });

  const productImages = {
    'CocaCola': Coca,
    'Sprite': SpriteZero,
    'Fanta': Fanta,
    'Pepsi': Pepsi,
    'Powerade':Powerade
  };

  return (
    <div className="home-container">
      <h1>Productos</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            nombre={product.nombre}
            descripcion={product.descripcion}
            precio={product.precio}
            imageUrl={productImages[product.nombre]}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
