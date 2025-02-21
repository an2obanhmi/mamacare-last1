// src/components/CartTemp/Cart.js
import React, { useState, useEffect, useContext } from "react";
import { useCart } from "../CartTemp/CartContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const { user } = useContext(UserContext);
  const [shippingCost, setShippingCost] = useState(0);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const isEligibleForFreeShipping = totalPrice >= 1200000;

  useEffect(() => {
    setShippingCost(isEligibleForFreeShipping ? 0 : 10000);
  }, [totalPrice, isEligibleForFreeShipping]);
  

  if (!user) {
    return (
      <div className="cart-empty">
        <h3>Bạn cần đăng nhập để xem giỏ hàng!</h3>
        <button className="cart-back-button" onClick={() => navigate("/login")}>Đăng nhập</button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h3>Giỏ hàng của bạn đang trống</h3>
        <p>Hãy thêm sản phẩm vào giỏ để tiếp tục mua sắm</p>
        <a href="/product" className="cart-back-button">Quay lại mua hàng</a>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      <div className="cart-content">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <button className="cart-remove" onClick={() => removeFromCart(item.id)}>✖</button>
              <img src={item.imgSrc} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p className="cart-item-price">{item.price.toLocaleString()} ₫</p>
                <div className="cart-quantity">
                  <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="btn-quantity">-</button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => {
                      const value = parseInt(e.target.value, 10);
                      if (value > 0) updateQuantity(item.id, value);
                    }}
                    className="cart-quantity-input"
                  />
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="btn-quantity">+</button>
                </div>
              </div>
              <p className="cart-item-subtotal">{(item.price * item.quantity).toLocaleString()} ₫</p>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h3>Cart Totals</h3>
          <p>Subtotal: {totalPrice.toLocaleString()} ₫</p>
          <div className="cart-shipping">
            <label>
              <input type="radio" name="shipping" checked={isEligibleForFreeShipping} readOnly /> Free Shipping ({isEligibleForFreeShipping ? "≥ 1,200,000 ₫" : "< 1,200,000 ₫"})
            </label>
            {!isEligibleForFreeShipping && (
              <label>
                <input type="radio" name="shipping" checked readOnly /> Shipping Fee: 10,000 ₫
              </label>
            )}
          </div>
          <h3>Total: {(totalPrice + shippingCost).toLocaleString()} ₫</h3>
          <button className="checkout-btn" onClick={() => navigate("/invoice")}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
