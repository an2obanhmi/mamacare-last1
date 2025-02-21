// src/components/Header/Header.js
import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../CartTemp/CartContext';
import { UserContext } from '../UserContext';
import './Header.css';

function Header() {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const { user, logout } = useContext(UserContext);
    const { totalItems } = useCart(); 
    
    const [isShaking, setIsShaking] = useState(false);
    const [cartIcon, setCartIcon] = useState("/assets/cart0.png");

    useEffect(() => {
        if (totalItems > 0) {
            setIsShaking(true);
            setCartIcon(`/assets/cart${totalItems}.png`);
            setTimeout(() => {
                setIsShaking(false);
            }, 500);
        } else {
            setCartIcon("/assets/cart0.png");
        }
    }, [totalItems]);

    return (
        <header className={`header ${isHome ? 'header-home' : 'header-default'}`}>
            <div className="logo">
                <img src="/assets/icon.jpg" alt="Icon" />
            </div>
            <nav className="nav">
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about-us">Giới Thiệu</a></li>
                    <li><a href="/services">Dịch Vụ</a></li>
                    <li><a href="/product">Sản Phẩm</a></li>
                    <li><a href="/resources">Đội Ngũ Bác Sĩ</a></li>
                    <li><a href="/recruitment">Tuyển Dụng</a></li>
                    <li><a href="/news">News</a></li>
                    <li>
                        {user ? (
                            <div className="user-info">
                                <img src="/assets/user.jpg" alt="User Avatar" className="user-avatar" />
                                <span>{user.username}</span> 
                                <button onClick={logout}>Đăng Xuất</button>
                            </div>
                        ) : (
                            <a href="/login">Đăng Ký / Đăng Nhập</a>
                        )}
                    </li>
                    <li className="cart-edit">
                        <a href="/cart" className={`cart-icon ${isShaking ? "shake" : ""}`}>
                            <img src={cartIcon} alt="Cart" className="cart-image" />
                        </a> 
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
