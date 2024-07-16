import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://6658a4035c361705264950b5.mockapi.io/products/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  return (
    <div className="product-detail-container">
      {product ? (
        <div className="product-detail">
          <p>{product.descripcion}</p>
          <p>Precio: ${product.precio}</p>
          <p>{product.lts}</p>
          <p>{product.gramos}</p>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ProductDetailPage;