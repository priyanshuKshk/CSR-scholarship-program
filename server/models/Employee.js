const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    }, { timestamps: true }); // Save date/time automatically
const EmployeeModel = mongoose.model('employee', EmployeeSchema);
module.exports = EmployeeModel;
