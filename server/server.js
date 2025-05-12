const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const ExcelJS = require('exceljs');
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
EmployeeModel.findOne({ email }).then((user) => {
    if (user) {
      // Use bcrypt to compare hashed password
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          res.json("Login successful");
        } else {
          res.json("Invalid password");
        }
      });
    } else {
      res.json("User not found");
    }
  });
});

// Signup route
const bcrypt = require("bcrypt");
const appendToSheet = require("./utils/googleSheet.js");
app.post("/signup", async (req, res) => {
  try {
    const { firstName,lastName,phone,email,password,} = req.body;

    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(password, 10);  // Salt rounds set to 10

    // Create a new employee with the hashed password and other fields

    const newEmployee = new EmployeeModel({
      firstName,
      lastName,
      phone,
      email,
      password: hashedPassword,
      
    });

    // Save the employee to the database
    const employee = await newEmployee.save();
    res.json(employee);
    
  } catch (err) {
    console.error("Error during signup:", err);
    res.status(500).json({ error: "Failed to sign up user" });
  }
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
     await appendToSheet([
      firstName, lastName, email, phone, course, qualification, marks, essay, marksheet
    ]);


  res.status(200).json({ message: "Application submitted successfully!" });
  
  
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).send("Something went wrong");
  }
});

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.get('/', (req, res) => {
  res.send('✅ Server is running!');
});

// Get PORT from environment (Render will provide this)
const PORT = process.env.PORT;

if (!PORT) {
  throw new Error("❌ PORT is not defined. Render requires binding to process.env.PORT.");
}

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});      

