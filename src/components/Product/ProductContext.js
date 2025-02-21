// src/components/Product/ProductContext.js
import React, { createContext, useContext } from "react";

const ProductContext = createContext();

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};

const sampleProducts = [
  { id: 1, title: "MLUA SKIN REPAIR CREAM", price: 415000, imgSrc: "/assets/product1.jpg", description: "Skin repair cream for healthy skin" },
  { id: 2, title: "MLUA NAVEL RUB", price: 335000, imgSrc: "/assets/product2.jpg", description: "Navel rub for skin care" },
  { id: 3, title: "MLUA BABY BATH SALT", price: 270000, imgSrc: "/assets/product3.jpg", description: "Bath salt for babies" },
];

export const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{ products: sampleProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
