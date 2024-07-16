import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, nombre, imageUrl, imageStyle }) => (
  <div className="product-card">
    <h2>{nombre}</h2>
    <img src={imageUrl} alt={nombre} style={imageStyle} />
    <Link to={`/product/${id}`}>Ver detalles</Link>
  </div>
);

export default ProductCard;