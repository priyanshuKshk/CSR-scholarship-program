import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { motion } from 'framer-motion'
import Lottie from "lottie-react";
import arrowAnim from "../arrow.json";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-black pt-2">
      
      {/* Swiper Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
      <Swiper
  modules={[Pagination, Navigation, Autoplay]}
  spaceBetween={30}
  slidesPerView={1}
  pagination={{ clickable: true }}
  navigation
  autoplay={{ delay: 3000, disableOnInteraction: true }}
  loop={true}
  className="rounded-lg overflow-hidden"
>
  {["/images/smgHome1.jpeg", "/images/smgHome2.jpeg"].map((img, index) => (
    <SwiperSlide key={index} className="flex justify-center items-center bg-white">
      <img
        src={img}
        alt={`Scholarship Event ${index + 1}`}
        className="w-full h-[300px] md:h-[500px] object-contain"
      />
    </SwiperSlide>
  ))}
</Swiper>

      </motion.div>

      {/* Eligibility Card */}
      <motion.div
        className="cursor-pointer border border-blue-300 hover:shadow-xl transition duration-300 rounded-xl p-6 mx-auto mt-4 w-[95%] md:w-[80%] bg-white text-black"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h3 className="text-xl font-bold mb-2">Check Eligibility Criteria and Apply</h3>
        <p className="text-gray-700 mb-4">
          Know who can apply for the scholarship and what documents are needed and then apply for the scholarship.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Link to="/eligibility">
            <button className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition">
              Check Eligibility
            </button>
          </Link>

          <div className="w-24 md:w-36">
            <Lottie animationData={arrowAnim} loop={true} />
          </div>

          <Link to="/scholarship-form">
            <button className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-green-700 transition">
              Apply Now
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Selection Process Section */}
      <section className="py-16 bg-gray-100 text-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Selection Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: "📄",
                title: "Apply",
                desc: "Fill the application form online with all required documents.",
              },
              {
                icon: "🔍",
                title: "Shortlisting",
                desc: "Our team carefully evaluates all applications.",
              },
              {
                icon: "💬",
                title: "Interview",
                desc: "Selected candidates are invited for a personal interview.",
              },
              {
                icon: "🎉",
                title: "Selection",
                desc: "Final candidates are awarded the scholarship.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
