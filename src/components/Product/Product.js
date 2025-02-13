// Product.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const sampleProducts = [
  { id: 1, title: "MLUA SKIN REPAIR CREAM", price: 415000, imgSrc: "/assets/product1.jpg", description: "Skin repair cream for healthy skin" },
  { id: 2, title: "MLUA NAVEL RUB", price: 335000, imgSrc: "/assets/product2.jpg", description: "Navel rub for skin care" },
  { id: 3, title: "MLUA BABY BATH SALT", price: 270000, imgSrc: "/assets/product3.jpg", description: "Bath salt for babies" },
  { id: 4, title: "MLUA BABY SHAMPOO AND SHOWER GEL", price: 310000, imgSrc: "/assets/product4.jpg", description: "Shampoo and shower gel for babies" },
  { id: 5, title: "MLUA NOURISHING CREAM", price: 320000, imgSrc: "/assets/product1.jpg", description: "Nourishing cream for skin" },
  { id: 6, title: "Đáy khí hàn Sinh Khương", price: 145000, imgSrc: "/assets/product2.jpg", description: "Herbal essence for better health" },
  { id: 7, title: "Muối tắm Bon Bon", price: 180000, imgSrc: "/assets/product3.jpg", description: "Bon Bon bath salt for relaxation" },
  { id: 8, title: "Kem Lành Da Mây", price: 280000, imgSrc: "/assets/product4.jpg", description: "Skin healing cream" },
  { id: 9, title: "MLUA SKIN REPAIR CREAM", price: 450000, imgSrc: "/assets/product1.jpg", description: "Skin repair cream variant" },
  { id: 10, title: "MLUA NAVEL RUB", price: 350000, imgSrc: "/assets/product2.jpg", description: "Navel rub variant" },
  { id: 11, title: "MLUA BABY BATH SALT", price: 265000, imgSrc: "/assets/product3.jpg", description: "Baby bath salt variant" },
];

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("");

  const productsPerPage = 8;
  const totalPages = Math.ceil(sampleProducts.length / productsPerPage);

  const handleSortChange = (order) => {
    setSortOrder(order);
    sampleProducts.sort((a, b) => order === "price-asc" ? a.price - b.price : b.price - a.price);
    setCurrentPage(1); // Reset to the first page after sorting
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentProducts = sampleProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="product-container">
      <h1 className="product-title">Cửa hàng</h1>
      <div className="product-filter">
        <p>Hiển thị {currentProducts.length} trong {sampleProducts.length} kết quả</p>
        <div className="sort-buttons">
          <button onClick={() => handleSortChange("price-asc")} className={sortOrder === "price-asc" ? "active" : ""}>Giá thấp - cao</button>
          <button onClick={() => handleSortChange("price-desc")} className={sortOrder === "price-desc" ? "active" : ""}>Giá cao - thấp</button>
        </div>
      </div>

      <div className="product-grid">
        {currentProducts.map(product => (
          <div key={product.id} className="product-item">
            <Link to={`/product/${product.id}`} className="product-link">
              <img src={product.imgSrc} alt={product.title} className="product-img" />
              <h3 className="product-name">{product.title}</h3>
            </Link>
            <div className="product-price">{product.price.toLocaleString()} ₫</div>
          </div>
        ))}
      </div>

      <nav className="pagination">
        <ul>
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i} onClick={() => handlePageChange(i + 1)} className={currentPage === i + 1 ? "current-page" : ""}>
              {i + 1}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Product;
