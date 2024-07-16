import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

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

  const handleCompraClick = () => {
    if (product) {
      Swal.fire({
        icon: 'success',
        title: 'Compra realizada con éxito!',
        text: `Has comprado ${product.nombre} - ${product.descripcion}`,
        confirmButtonText: 'Aceptar'
      });
    }
  };

  return (
    <div className="product-detail-container">
      {product ? (
        <div className="product-detail">
          <h2>{product.nombre}</h2>
          <p>{product.descripcion}</p>
          <p>Precio: ${product.precio}</p>
          <button onClick={handleCompraClick}>Comprar</button>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ProductDetailPage;
