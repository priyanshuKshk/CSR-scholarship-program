import React from 'react';
import { motion } from 'framer-motion';
import { FiUser } from 'react-icons/fi';

const testimonials = [
  {
    name: "Aarav Singh",
    role: "Scholarship Recipient",
    message: "The SMG Scholarship helped me pursue my engineering dreams without financial stress.",
  },
  {
    name: "Sneha Mehra",
    role: "Student",
    message: "Great support system, timely communication, and genuine care for student futures!",
  },
];

export default function Testimonial() {
  return (
    <div className="bg-gray-100 py-12 px-6 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Scholars Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{margin:"20px"}}
          >
            <div className="flex items-center gap-3 mb-4 text-blue-900">
              <FiUser className="text-xl" />
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">“{testimonial.message}”</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
