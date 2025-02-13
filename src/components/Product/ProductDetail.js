// src/components/Product/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../CartTemp/CartContext'; // Adjusted path as needed
import './ProductDetail.css';

const sampleProducts = [
  { id: 1, title: "MLUA SKIN REPAIR CREAM", price: 415000, description: "Skin repair cream for healthy skin", imgSrc: "/assets/product1.jpg" },
  { id: 2, title: "MLUA NAVEL RUB", price: 335000, description: "Navel rub for skin care", imgSrc: "/assets/product2.jpg" },
  { id: 3, title: "MLUA BABY BATH SALT", price: 270000, description: "Bath salt for babies", imgSrc: "/assets/product3.jpg" },
  { id: 4, title: "MLUA BABY SHAMPOO AND SHOWER GEL", price: 310000, description: "Shampoo and shower gel for babies", imgSrc: "/assets/product4.jpg" },
  { id: 5, title: "MLUA SKIN REPAIR CREAM", price: 415000, description: "Skin repair cream for healthy skin", imgSrc: "/assets/product1.jpg" },
        { id: 6, title: "MLUA NAVEL RUB", price: 335000, description: "Navel rub for skin care", imgSrc: "/assets/product2.jpg" },
        { id: 7, title: "MLUA BABY BATH SALT", price: 270000, description: "Bath salt for babies", imgSrc: "/assets/product3.jpg" },
        { id: 8, title: "MLUA BABY SHAMPOO AND SHOWER GEL", price: 310000, description: "Shampoo and shower gel for babies", imgSrc: "/assets/product4.jpg" },
        { id: 9, title: "MLUA SKIN REPAIR CREAM", price: 415000, description: "Skin repair cream for healthy skin", imgSrc: "/assets/product1.jpg" },
        { id: 10, title: "MLUA NAVEL RUB", price: 335000, description: "Navel rub for skin care", imgSrc: "/assets/product2.jpg" },
        { id: 11, title: "MLUA BABY BATH SALT", price: 270000, description: "Bath salt for babies", imgSrc: "/assets/product3.jpg" },
        { id: 12, title: "MLUA BABY SHAMPOO AND SHOWER GEL", price: 310000, description: "Shampoo and shower gel for babies", imgSrc: "/assets/product4.jpg" },
        { id: 13, title: "MLUA SKIN REPAIR CREAM", price: 415000, description: "Skin repair cream for healthy skin", imgSrc: "/assets/product1.jpg" },
        { id: 14, title: "MLUA NAVEL RUB", price: 335000, description: "Navel rub for skin care", imgSrc: "/assets/product2.jpg" },
        { id: 15, title: "MLUA BABY BATH SALT", price: 270000, description: "Bath salt for babies", imgSrc: "/assets/product3.jpg" },
        { id: 16, title: "MLUA BABY SHAMPOO AND SHOWER GEL", price: 310000, description: "Shampoo and shower gel for babies", imgSrc: "/assets/product4.jpg" },
        { id: 17, title: 'Lành Rốn Bon Bon Home Care', price: '115,000 đ', description: "Shampoo and shower gel for babie",imgSrc: "/assets/pro1.jpg"},
  // Add more products as needed
];

const ProductDetail = () => {
  const { productId } = useParams(); // 'productId' should match the parameter name in your route
  const { addToCart } = useCart();
  
  // Find the product by ID from URL parameter
  const product = sampleProducts.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.imgSrc} alt={product.title} className="product-detail-image" />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p className="product-detail-price">{product.price.toLocaleString()} ₫</p>
      <div className="product-form">
        <h2>Thêm sản phẩm vào giỏ hàng</h2>
        <button onClick={() => addToCart(product, 1)} className="submit-btn">Thêm vào giỏ</button>
      </div>
    </div>
  );
};

export default ProductDetail;
