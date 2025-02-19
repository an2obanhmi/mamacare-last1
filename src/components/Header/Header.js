import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import { useCart } from '../CartTemp/CartContext';
import { UserContext } from '../UserContext';
import './Header.css';

function Header() {
    const location = useLocation(); // Lấy thông tin đường dẫn hiện tại
    const isHome = location.pathname === '/'; // Kiểm tra nếu đang ở trang Home
    const { user, logout } = useContext(UserContext);
    const { totalItems } = useCart(); // Access totalItems from CartContext

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
                                <span>{user.username}</span> {/* Display username */}
                                <button onClick={logout}>Đăng Xuất</button>
                            </div>
                        ) : (
                            <a href="/login">Đăng Ký / Đăng Nhập</a>
                        )}
                    </li>
                    <li className='cart-edit'>
                        <a href="/cart">🛒 {totalItems}</a> {/* Display total items in cart */}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
