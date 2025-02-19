// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import cors
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const User = require("./models/User");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Cấu hình CORS cho phép kết nối từ frontend chạy trên localhost:5001
app.use(
  cors({
    origin: ["http://localhost:5001", "https://mamacare-latest.vercel.app"],
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);


// Middleware để phân tích JSON từ request body
app.use(express.json());
console.log(process.env.DB_URI);
// Kết nối tới MongoDB Atlas
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Kết nối thành công đến MongoDB Atlas"))
  .catch((error) => console.error("Lỗi khi kết nối đến MongoDB:", error));

// Route Đăng ký người dùng mới
app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Kiểm tra xem người dùng đã tồn tại chưa
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email này đã được sử dụng" });
    }

    // Mã hóa mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);

    // Tạo người dùng mới
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Lưu người dùng vào MongoDB
    await newUser.save();
    res.status(201).json({ message: "Đăng ký thành công" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi đăng ký người dùng", error });
  }
});

// Route Đăng nhập người dùng
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Tìm người dùng qua email
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Email hoặc mật khẩu không đúng" });
    }

    // Kiểm tra mật khẩu
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Email hoặc mật khẩu không đúng" });
    }

    // Tạo token JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Đăng nhập thành công", token });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi đăng nhập", error });
  }
});

// Route kiểm tra kết nối server
app.get("/", (req, res) => {
  res.send("Server đang chạy và kết nối thành công đến MongoDB");
});

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-email", async (req, res) => {
  try {
    const { to, name, servicesUse } = req.body;
    const emailHTML = `
          <!DOCTYPE html>
          <html lang="vi">
          <head>
          <meta charset="UTF-8">
          <style>
              body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f7f7f7;
              }
              .email-container {
              max-width: 600px;
              margin: 20px auto;
              background: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
              }
              .email-header {
              background-color: #5289c2;
              color: #ffffff;
              text-align: center;
              padding: 20px;
              }
              .email-header h1 {
              margin: 0;
              font-size: 24px;
              }
              .email-body {
              padding: 20px;
              color: #333333;
              }
              .email-body p {
              line-height: 1.6;
              font-size: 16px;
              margin: 10px 0;
              }
              .email-body .service-name {
              font-weight: bold;
              color: #5289c2;
              }
              .email-footer {
              text-align: center;
              padding: 20px;
              background-color: #f7f7f7;
              font-size: 14px;
              color: #888888;
              }
              .email-footer a {
              color: #5289c2;
              text-decoration: none;
              }
              .email-footer a:hover {
              text-decoration: underline;
              }
          </style>
          </head>
          <body>
          <div class="email-container">
              <div class="email-header">
              <h1>Cảm ơn bạn!</h1>
              </div>
              <div class="email-body">
              <p>Xin chào <strong>${name}</strong>,</p>
              <p>
                  Cảm ơn bạn đã tin tưởng và sử dụng dịch vụ 
                  <span class="service-name">${servicesUse}</span> của chúng tôi.
              </p>
              <p>Trân trọng,</p>
              <p><strong>Đội ngũ hỗ trợ</strong></p>
              </div>
              <div class="email-footer">
              <p>Đây là email tự động, vui lòng không trả lời.</p>
              <p>
                  Nếu bạn cần hỗ trợ thêm, vui lòng liên hệ chúng tôi qua 
                  <a href="mailto:support@example.com">support@example.com</a>.
              </p>
              </div>
          </div>
          </body>
          </html>
          `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject: "Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi",
      html: emailHTML,
    };

    const info = await transporter.sendMail(mailOptions);

    res.status(200).json({
      message: "Email đã được gửi thành công!",
      info: info.response,
    });
  } catch (error) {
    res.status(500).json({
      message: "Lỗi khi gửi email",
      error,
    });
  }
});

const transporter2 = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER_LOCATE,
    pass: process.env.EMAIL_PASS_LOCATE,
  },
});

app.post("/send-email-locate", async (req, res) => {
  try {
    const { name, email, phone, message, servicesUse } = req.body;

    if (!name || !email || !phone || !servicesUse) {
      return res.status(400).json({
        message:
          "Thiếu thông tin bắt buộc. Vui lòng cung cấp đủ các trường: name, email, phone, servicesUse.",
      });
    }

    const emailHTML = `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f9f9f9;
        }
        .email-container {
          max-width: 600px;
          margin: 20px auto;
          background: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .email-header {
          background-color: #007bff;
          color: #ffffff;
          text-align: center;
          padding: 20px;
        }
        .email-header h1 {
          margin: 0;
          font-size: 26px;
        }
        .email-body {
          padding: 20px;
          color: #333333;
        }
        .email-body p {
          line-height: 1.8;
          font-size: 16px;
          margin: 10px 0;
        }
        .email-body .highlight {
          font-weight: bold;
          color: #007bff;
        }
        .email-body .order-details {
          margin-top: 20px;
          padding: 15px;
          background-color: #f7f7f7;
          border-left: 4px solid #007bff;
          border-radius: 4px;
        }
        .email-footer {
          text-align: center;
          padding: 15px;
          background-color: #f0f0f0;
          font-size: 14px;
          color: #888888;
        }
        .email-footer a {
          color: #007bff;
          text-decoration: none;
        }
        .email-footer a:hover {
          text-decoration: underline;
        }
      </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-header">
            <h1>Thông báo đơn đặt hàng mới</h1>
          </div>
          <div class="email-body">
            <p>Kính gửi Quản trị viên,</p>
            <p>
              Bạn vừa nhận được một đơn đặt hàng mới từ khách hàng 
              <span class="highlight">${name}</span>.
            </p>
            <div class="order-details">
              <p><strong>Thông tin chi tiết đơn hàng:</strong></p>
              <p><strong>Họ và tên:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Số điện thoại:</strong> ${phone}</p>
              <p><strong>Dịch vụ:</strong> ${servicesUse}</p>
              <p><strong>Lời nhắn:</strong> ${message ?? ""}</p>
            </div>
            <p>Vui lòng kiểm tra và xử lý đơn hàng này ngay khi có thể.</p>
            <p>Trân trọng,</p>
            <p><strong>Hệ thống thông báo</strong></p>
          </div>
          <div class="email-footer">
            <p>Email này được gửi tự động từ hệ thống, vui lòng không trả lời.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: process.env.EMAIL_PASS_LOCATE,
      to: process.env.EMAIL_USER,
      subject: "Dịch vụ mới",
      html: emailHTML,
    };

    const info = await transporter2.sendMail(mailOptions);

    res.status(200).json({
      message: "Email đã được gửi thành công!",
      info: info.response,
    });
  } catch (error) {
    res.status(500).json({
      message: "Lỗi khi gửi email",
      error,
    });
  }
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});
