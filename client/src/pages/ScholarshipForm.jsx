import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Mail, Phone, FileText, GraduationCap, BookOpenCheck } from "lucide-react";

const ScholarshipForm = () => {
  const navigate = useNavigate();
  const [fileInput, setFileInput] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    qualification: "",
    marks: "",
    marksheet: null,
    essay: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "marksheet" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, key === "marksheet" ? fileInput : value);
    });

    try {
      const response = await fetch(
        //  "https://csr-scholarship-program-1.onrender.com/api/scholarship-form" ,
        "http://localhost:3001/api/scholarship-form",
       {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        navigate("/home");
      } else {
        const errorText = await response.text();
        alert("Server error: " + errorText);
      }
    } catch (err) {
      console.error("Submit failed:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="tagesschrift-regular flex flex-col items-center px-4 md:px-20 py-10 space-y-12"
    >
      <motion.section
        className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-blue-900 text-3xl font-bold text-center mb-8">
          🎓 Student Scholarship Application Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { label: "First Name", name: "firstName", type: "text", Icon: User },
            { label: "Last Name", name: "lastName", type: "text", Icon: User },
            { label: "Email", name: "email", type: "email", Icon: Mail },
            { label: "Phone Number", name: "phone", type: "tel", Icon: Phone },
            { label: "Course Applied For", name: "course", type: "text", Icon: BookOpenCheck },
            { label: "Qualification", name: "qualification", type: "text", Icon: GraduationCap },
            { label: "Marks", name: "marks", type: "text", Icon: FileText },
          ].map(({ label, name, type, Icon }) => (
            <div key={name}>
              <label className="text-gray-900 mb-2 flex items-center gap-2">
                <Icon className="h-5 w-5 text-blue-700" />
                {label}
              </label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                placeholder={`Enter your ${label.toLowerCase()}`}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          ))}

          <div>
            <label className="block text-gray-900 mb-2">Upload Marksheet (PDF/JPG/PNG)</label>
            <input
              type="file"
              name="marksheet"
              accept=".pdf,.jpg,.png"
              onChange={(e) => setFileInput(e.target.files[0])}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white"
            />
          </div>

          <div>
            <label className="block text-gray-900 mb-2">Why you deserve this scholarship:</label>
            <textarea
              name="essay"
              value={formData.essay}
              onChange={handleChange}
              rows="4"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"
          >
            🚀 Submit Application
          </motion.button>
        </form>
      </motion.section>
    </motion.div>
  );
};

export default ScholarshipForm;
