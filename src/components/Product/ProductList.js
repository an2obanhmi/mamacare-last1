// src/components/Product/ProductList.js
import React from "react";
import { Link } from "react-router-dom";
import { useProduct } from "./ProductContext";
import "./ProductList.css";

const ProductList = () => {
  const { products } = useProduct();

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
