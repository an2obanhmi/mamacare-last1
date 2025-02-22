// src/components/Login/RegisterPage.js
import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../UserContext'; // Import UserContext to use login function
import './AuthPage.css';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useContext(UserContext); // Access login function

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/register", { username, email, password }); 
            alert('Đăng ký thành công! Hãy đăng nhập để tiếp tục.');
            
            // Save username in localStorage and call login function
            const userInfo = { username, email };
            localStorage.setItem('user', JSON.stringify(userInfo)); // Save the user info
            login(userInfo); // Update the context to logged-in state
            
            navigate('/login', { state: { from: location.state?.from } });
        } catch (error) {
            alert('Đăng ký thất bại! Email có thể đã tồn tại.');
        }
    };

    return (
        <div className="auth-container">
            <h2>Đăng Ký</h2>
            <form onSubmit={handleRegister}>
                <div className="input-group">
                    <label>Tên đăng nhập</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
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
                <button type="submit" className="auth-button">Đăng Ký</button>
            </form>
            <p>Đã có tài khoản? <span onClick={() => navigate('/login')} className="toggle-link">Đăng Nhập</span></p>
        </div>
    );
};

export default RegisterPage;
