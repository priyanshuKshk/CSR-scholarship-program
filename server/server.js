const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

const EmployeeModel = require("./models/Employee.js");
const StudentModel = require("./models/Employee.js"); // Make sure this points to the correct Student schema file

const app = express();
app.use(express.json());
app.use(cors());

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/employee", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
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
app.post("/api/scholarship-form", upload.single("marksheet"), (req, res) => {
  const { name, email, phone, course, qualification, marks, essay } = req.body;
  const marksheet = req.file ? req.file.filename : "";

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

  newStudent
    .save()
    .then((student) => res.json(student))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
