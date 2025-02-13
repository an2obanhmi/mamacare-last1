// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './components/UserContext';
import { CartProvider } from './components/CartTemp/CartContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUs/AboutUs';
import Resource from './components/Resources/Resources';
import Recruitment from './components/Recruitment/Recruitment';
import ServiceDetail from './components/Services/ServiceDetail';
import ProductDetail from './components/Product/ProductDetail';
import Cart from './components/CartTemp/Cart'; // Cart Page Component
import Infor from './components/Infor/Infor';
import AuthPage from './components/Login/AuthPage';
import RegisterPage from './components/Login/RegisterPage';
import ProtectedRoute from './components/ProtectedRoute';
import ServicePay from './components/Services/ServicePay';
import Product from './components/Product/Product';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <UserProvider>
            <CartProvider>
                <Router>
                    <div className="App">
                        <Header />
                        <Routes>
                            <Route path="/login" element={<AuthPage />} />
                            <Route path="/register" element={<RegisterPage />} />
                            <Route path="/" element={<Home />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/about-us" element={<AboutUs />} />
                            <Route path="/resources" element={<Resource />} />
                            <Route path="/recruitment" element={<Recruitment />} />
                            <Route path="/product" element={<Product />} />
                            <Route path="/service-pay" element={<ServicePay />} />
                            <Route path="/cart" element={<Cart />} /> {/* Cart page route */}

                            {/* Protected route for service details */}
                            <Route
                                path="/service/:typeService"
                                element={
                                    <ProtectedRoute>
                                        <ServiceDetail />
                                    </ProtectedRoute>
                                }
                            />

                            {/* Protected route for product details */}
                            <Route path="/product/:productId" element={<ProductDetail />} />
                        </Routes>
                        <Infor />
                        <Footer />
                    </div>
                </Router>
            </CartProvider>
        </UserProvider>
    );
}

export default App;
