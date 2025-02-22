// src/components/Login/AuthPage.js
import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../UserContext';
import './AuthPage.css';
import { API_URL } from './../../config';

const AuthPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/login`, { email, password });
            alert('Đăng nhập thành công!');
            login({ username: response.data.username, email }); // Lưu thông tin user
            const redirectTo = location.state?.from || '/';
            navigate(redirectTo);
        } catch (error) {
            alert('Đăng nhập thất bại! Kiểm tra lại email và mật khẩu.');
        }
    };

    const goToRegister = () => {
        navigate('/register', { state: { from: location.state?.from } });
    };

    return (
        <div className="auth-container">
            <h2>Đăng Nhập</h2>
            <form onSubmit={handleLogin}>
                <div className="input-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Mật khẩu</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="auth-button">Đăng Nhập</button>
            </form>
            <p>Chưa có tài khoản? <span onClick={goToRegister} className="toggle-link">Đăng Ký</span></p>
        </div>
    );
};

export default AuthPage;
