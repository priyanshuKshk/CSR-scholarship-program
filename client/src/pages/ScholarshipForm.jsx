import { useState } from "react";
import axios from "axios";

const ScholarshipForm = () => {
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
    data.append("name", formData.firstName + " " + formData.lastName);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("course", formData.course);
    data.append("qualification", formData.qualification);
    data.append("marks", formData.marks);
    data.append("marksheet", formData.marksheet); // ✅ file
    data.append("essay", formData.essay);

    try {
      const res = await fetch("http://localhost:3001/api/scholarship-form", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        alert("Form submitted successfully!");
      } else {
        const errorText = await res.text();
        alert("Server error: " + errorText);
      }
    } catch (err) {
      console.error("Submit failed:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="tagesschrift-regular flex flex-col items-center px-4 md:px-20 py-10 space-y-12">
      <section className="w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Student Scholarship Application Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form fields */}
          {/* Same fields as before */}
          <div>
            <label className="block text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Course Applied For
            </label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Qualification</label>
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Marks</label>
            <input
              type="text"
              name="marks"
              value={formData.marks}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
             Qualification markssheet (PDF/JPG/PNG)
            </label>
            <input
              type="file"
              name="marksheet"
              accept=".pdf,.jpg,.png"
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Why you deserve this scholarship :-
            </label>
            <textarea
              name="essay"
              value={formData.essay}
              onChange={handleChange}
              rows="4"
              required
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Application
          </button>
        </form>
      </section>
    </div>
  );
};

export default ScholarshipForm;
