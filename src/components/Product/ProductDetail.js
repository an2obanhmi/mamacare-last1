// src/components/Product/ProductDetail.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../CartTemp/CartContext";
import { useProduct } from "./ProductContext";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const { products } = useProduct();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(productId));
    setProduct(foundProduct);
  }, [productId, products]);

  if (!product) {
    return <div className="product-not-found">Không tìm thấy sản phẩm</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, 1);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 1500);
  };

  return (
    <div className="product-detail-container">
      <img src={product.imgSrc} alt={product.title} className="product-detail-image" />
      <h1 className="product-detail-title">{product.title}</h1>
      <p className="product-detail-description">{product.description}</p>
      <p className="product-detail-price">{product.price.toLocaleString()} ₫</p>
      
      <button onClick={handleAddToCart} className="add-to-cart-btn">🛒 Thêm vào giỏ hàng</button>
      
      {showNotification && <div className="cart-notification">✅ Đã thêm vào giỏ hàng!</div>}
      
      <button onClick={() => navigate("/product")} className="back-to-products-btn">🔙 Quay lại danh sách sản phẩm</button>
    </div>
  );
};

export default ProductDetail;
