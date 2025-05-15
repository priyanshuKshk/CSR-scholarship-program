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
const nodemailer = require("nodemailer");
// const StudentModel = require("./models/StudentModel.js"); // Make sure this points to the correct Student schema file


const app = express();
app.use(express.json());

require('dotenv').config();


// OR allow specific origin only:
app.use(cors());

// Add this at the top if you want to use `dotenv` directly

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
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
const appendToSheet = require("./utils/googleSheet.js");


// Scholarship form submission route
app.post('/api/scholarship-form',upload.single("marksheet") ,async(req, res) => {
  
    try {
    const { firstName, lastName, email, phone, course, qualification, marks, essay } = req.body;
  
    const marksheet = req.file
  ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
  : "";

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
 try {
    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS  // app password
      }
    });
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Scholarship Application Submitted",
      html: 
      `
      <p>Dear <strong>${firstName} ${lastName}</strong>,</p>

<p>
Thank you for applying for the <strong>SMG Scholarship</strong>. We will review your application and get back to you soon.<br>
If selected, our team will connect with you within <strong>7 Days</strong>.
</p>

<p><strong>Best Regards<br>SMG ELECTRIC SCOOTERS TEAM</strong></p>

<p>
<strong>Email :-</strong> 
<a href="mailto:Smgelectricscootersltd@gmail.com"><strong>Smgelectricscootersltd@gmail.com</strong></a><br>
<strong>Contact Us :-</strong> 
<a href="tel:+911882318708"><strong>+91 1882 318708</strong></a><br>
<strong>Office :-</strong> Office no 370&nbsp;&nbsp;Sutheri Road Eminent Complex Hoshiarpur 146001 Punjab.
</p>

<p>
<strong>For more information visit:</strong><br>
<a href="https://smg-dev.vercel.app/"><strong>Website</strong></a> |
<a href="https://www.youtube.com/@smgelectricscootersltd"><strong>Youtube</strong></a> |
<a href="https://www.instagram.com/_smgelectricscootersltd?igsh=c2w5dXd0Z2oyeXo3"><strong>Instagram</strong></a>
</p>
<img src="cid:logo" alt="SMG Logo" style="width: 100px; height: auto; margin-bottom: 20px;" />`
,
  attachments: [
    {
      filename: 'image.png',
      path: './assets/image.png', // Local path to your logo image
      cid: 'logo' // same as the cid used in <img src="cid:logo" />
    }
  ]
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: "Email failed" });
  }
  
  try {
  await appendToSheet([
    firstName, lastName, email, phone, course, 
    qualification, marks, marksheet, essay
  ]);
} catch (e) {
  console.error("Failed to update Google Sheet:", e);
  // Optionally continue processing since MongoDB save succeeded
}

  res.status(200).json({ message: "Application submitted successfully!" });
  
  
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).send("Something went wrong");
  }

});

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));




// Get PORT from environment (Render will provide this)
const PORT = process.env.PORT||3001;

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});      

