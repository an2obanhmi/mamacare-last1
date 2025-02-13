import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ServiceForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    servicePackage: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const email = localStorage.getItem("user");
    navigate("/service-pay", { state: formData }); // Chuyển hướng kèm dữ liệu form
  };

  return (
    <div className="service-form">
      <h2 className="form-title">Đặt dịch vụ</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="name" className="form-label">
          Họ và tên:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          onChange={handleInputChange}
          required
        />

        <label htmlFor="phone" className="form-label">
          Số điện thoại:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="form-input"
          onChange={handleInputChange}
          required
        />

        <label htmlFor="message" className="form-label">
          Lời nhắn:
        </label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          rows="4"
          onChange={handleInputChange}
        ></textarea>

        <label htmlFor="servicePackage" className="form-label">
          Gói dịch vụ:
        </label>
        <select
          id="servicePackage"
          name="servicePackage"
          className="form-select"
          onChange={handleInputChange}
          required
        >
          <option value="">Chọn gói</option>
          <option value="Gói Lẻ">Gói Lẻ</option>
          <option value="Gói Cơ Bản: “Mẹ Tròn Con Vuông”">
            Gói Cơ Bản: “Mẹ Tròn Con Vuông”
          </option>
          <option value="Gói Nâng Cao: “Hồi Phục Toàn Diện”">
            Gói Nâng Cao: “Hồi Phục Toàn Diện”
          </option>
          <option value="Gói Cao Cấp: “Chăm Sóc Vàng”">
            Gói Cao Cấp: “Chăm Sóc Vàng”
          </option>
        </select>

        <button type="submit" className="submit-button">
          Đặt ngay
        </button>
      </form>
    </div>
  );
};

export default ServiceForm;
