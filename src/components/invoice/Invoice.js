// src/components/Invoice.js
import React, { useState } from "react";
import { useCart } from "../CartTemp/CartContext";
import { useNavigate } from "react-router-dom";
import "./Invoice.css";

const Invoice = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingCost = totalPrice >= 1200000 ? 0 : 10000;
  const finalAmount = totalPrice + shippingCost;

  // Đường dẫn ảnh QR cụ thể
  const qrImageUrl = "/assets/qr-payment.png"; // Thay thế bằng đường dẫn thực tế của ảnh QR

  const handleConfirmPayment = () => {
    setPaymentConfirmed(true);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <div className="invoice-container">
      <h2>🧾 Hóa Đơn Thanh Toán</h2>
      <div className="invoice-details">
        {cart.map((item) => (
          <div key={item.id} className="invoice-item">
            <p>{item.title} x {item.quantity} - {item.price.toLocaleString()} ₫</p>
          </div>
        ))}
        <p><strong>Phí vận chuyển:</strong> {shippingCost.toLocaleString()} ₫</p>
        <h3><strong>Tổng cộng:</strong> {finalAmount.toLocaleString()} ₫</h3>
      </div>
      <div className="qr-code">
        <h3>🔗 Quét mã QR để thanh toán</h3>
        <img src={qrImageUrl} alt="QR Code" className="qr-image" />
      </div>
      <button className="confirm-btn" onClick={handleConfirmPayment}>✅ Xác nhận đã thanh toán</button>
      
      {paymentConfirmed && <p className="success-message">🎉 Cảm ơn quý khách! Đơn hàng của bạn đã được xác nhận.</p>}
    </div>
  );
};

export default Invoice;
