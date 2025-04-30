const express = require('express');
const multer = require('multer');
const path=require('path');
const StudentModel = require('../models/StudentModel.js');
const router = express.Router();
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
      cb(null, "uploads/");
    },
    filename: (req,file,cb)=>{
      cb(null, Date.now() + file.originalname);}

})
const upload = multer({storage:storage});
router.post("/api/scholarship-form", upload.single("marksheet"), async (req, res) => {
  try {
    const { name, email, phone, course, qualification, marks, essay } = req.body;
    const marksheet = req.file?.filename || "";

    const newStudent = new StudentModel({
      name,
      email,
      phone,
      course,
      qualification,
      marks,
      marksheet,
      essay,
    });

    await newStudent.save();
    res.status(200).json({ message: "Application submitted successfully!" });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
module.exports = router;
