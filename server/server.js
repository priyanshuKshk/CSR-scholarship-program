const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

const EmployeeModel = require("./models/Employee.js");
const { default: StudentModel } = require("./models/StudentModel.js");
// const StudentModel = require("./models/StudentModel.js"); // Make sure this points to the correct Student schema file


const app = express();
app.use(express.json());

require('dotenv').config();
app.use(cors());

// Add this at the top if you want to use `dotenv` directly

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connecteded"))
.catch((err) => console.error("MongoDB connection error:", err));

// Ensure uploads folder exists
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log("Uploads directory created:", uploadsDir);
}

// Setup multer storage for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage });

// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email, password }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Login successful");
      } else {
        res.json("Invalid password");
      }
    } else {
      res.json("User not found");
    }  
  });
});

// Signup route
app.post("/signup", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employee) => res.json(employee))
    .catch((err) => res.json(err));
});

// Scholarship form submission route
app.post('/api/scholarship-form',upload.single("marksheet") ,async(req, res) => {
  
    try {
    const { firstName, lastName, email, phone, course, qualification, marks, essay } = req.body;
  
    const marksheet = req.file?.filename || "";

    const newStudent = new StudentModel({
      firstName,
      lastName,
      email,
      phone,
      course,
      qualification,
      marks,
      marksheet,
      essay,
    });

     const student = await newStudent.save();
    

     // Example: req.body.name, req.body.email
 
  res.status(200).json({ message: "Application submitted successfully!" });
  
  
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).send("Something went wrong");
  }
});

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

 const PORT = 3001||process.env.PORT ;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

