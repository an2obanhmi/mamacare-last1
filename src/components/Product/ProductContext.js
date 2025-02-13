// src/components/Cart/CartContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([
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
  ]);

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Calculate total items in cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, totalItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
