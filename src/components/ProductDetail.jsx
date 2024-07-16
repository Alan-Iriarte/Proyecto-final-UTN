import React from 'react';

const ProductDetail = ({ nombre, descripcion, precio }) => (
  <div className="product-detail">
    <h1>{nombre}</h1>
    <p>{descripcion}</p>
    <p>Precio: ${precio}</p>
    <button>Comprar</button>
  </div>
);

export default ProductDetail;