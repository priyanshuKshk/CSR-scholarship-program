import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-black" style={{ paddingTop: "10px" }}>
      
      {/* Swiper Section with Motion */}
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
          <SwiperSlide>
            <img
              src="/images/smgHome1.jpeg"
              alt="Scholarship Event 2"
              className="w-full h-64 object-cover"
              style={{
                maxWidth: "100vw",
                height: "40vh",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/images/smgHome2.jpeg"
              alt="Scholarship Event 3"
              className="w-full h-64 object-cover"
              style={{
                maxWidth: "100vw",
                height: "40vh",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </SwiperSlide>
        </Swiper>
      </motion.div>

      {/* Eligibility Card with Motion */}
      <Link to="/eligibility">
        <motion.div
          className="cursor-pointer border border-blue-300 hover:shadow-xl transition duration-300 rounded-xl p-6 mx-auto my-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            marginTop: "10px",
            width: "95vw",
            backgroundColor: "#36AAC9",
          }}
        >
          <h3 className="text-xl font-bold mb-2">Check Eligibility Criteria and Apply</h3>
          <p className="text-gray-200">
            Know who can apply for the scholarship and what documents are needed and then apply for the scholarship.
          </p>
        </motion.div>
      </Link>

      {/* Selection Process Section */}
      <section className="py-16 bg-gray-100">
        <div
          className="container mx-auto px-4"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "20px",
          }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Selection Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: "📄",
                title: "Apply",
                desc: "Fill the application form online with all required documents.",
                bg: "#F7768D",
              },
              {
                icon: "🔍",
                title: "Shortlisting",
                desc: "Our team carefully evaluates all applications.",
                bg: "#D870C7",
              },
              {
                icon: "💬",
                title: "Interview",
                desc: "Selected candidates are invited for a personal interview.",
                bg: "#7E75D0",
              },
              {
                icon: "🎉",
                title: "Selection",
                desc: "Final candidates are awarded the scholarship.",
                bg: "#36AAC9",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                style={{
                  margin: "5px",
                  backgroundColor: step.bg,
                }}
              >
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-xl text-gray-100 font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-200">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
