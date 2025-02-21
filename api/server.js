const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const User = require("./models/User");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["https://mamacare-latest.vercel.app"],
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.use(express.json());

mongoose
  .connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Đã kết nối MongoDB Atlas"))
  .catch((error) => console.error("❌ Lỗi kết nối MongoDB:", error));

app.get("/", (req, res) => {
  res.send("✅ Server đang chạy trên Vercel!");
});

module.exports = app;  // 🚀 Vercel yêu cầu xuất `app`
