// models/User.js
const mongoose = require('mongoose');

// Định nghĩa UserSchema cho collection users
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,  // Bắt buộc phải có tên đăng nhập
        unique: true,    // Đảm bảo mỗi username là duy nhất
        trim: true       // Xóa khoảng trắng thừa ở đầu và cuối
    },
    email: {
        type: String,
        required: true,  // Bắt buộc phải có email
        unique: true,    // Đảm bảo mỗi email là duy nhất
        lowercase: true, // Chuyển email thành chữ thường
        trim: true
    },
    password: {
        type: String,
        required: true   // Bắt buộc phải có mật khẩu
    },
    createdAt: {
        type: Date,
        default: Date.now // Tự động thêm ngày tạo
    }
});

// Tạo model 'User' dựa trên UserSchema
const User = mongoose.model('User', UserSchema);

module.exports = User;
