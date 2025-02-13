import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <img src={product.imgSrc} alt={product.title} className="product-image" />
            <h4>{product.title}</h4>
            <p className="product-price">{product.price.toLocaleString()} ₫</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
