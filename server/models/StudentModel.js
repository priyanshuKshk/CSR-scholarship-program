import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  course: { type: String, required: true },
  qualification: { type: String, required: true },
  marks: { type: String, required: true },
  marksheet: { type: String, required: true }, // file name stored
  essay: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('StudentModel', StudentSchema);
