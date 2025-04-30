import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { motion } from 'framer-motion';


export default function Home() {
  return (
    <div className=" tagesschrift-regular pt-32 bg-gradient-to-r from-primary to-secondary text-black">
      
      {/* Hero Section */}
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
  {/* Hero Slide */}
  <SwiperSlide>
    <section className="pb-20">
      <div className="container mx-auto px-4 py-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeIn">
          Empowering Students Through Education
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-fadeIn delay-100">
          The SMG Scholarship provides financial support and mentorship to help students achieve their academic dreams.
        </p>
        <Link to="/eligibility" className="inline-block animate-fadeIn delay-200">
          <button className="bg-blue-900 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
            Request Support
          </button>
        </Link>
      </div>
    </section>
  </SwiperSlide>

  {/* Photo Slide 1 */}
  <SwiperSlide>
    <img src="../src/images/photo2.jpg" alt="Scholarship Event 2" className="w-full h-64 object-cover" />
  </SwiperSlide>

  {/* Photo Slide 2 */}
  <SwiperSlide>
    <img src="../src/images/photo3.jpeg" alt="Scholarship Event 3" className="w-full h-64 object-cover" />
  </SwiperSlide>
</Swiper>


      {/* Selection Process */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Selection Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">📄</div>
              <h3 className="text-xl font-semibold mb-2">Apply</h3>
              <p className="text-gray-600">Fill the application form online with all required documents.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Shortlisting</h3>
              <p className="text-gray-600">Our team carefully evaluates all applications.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-2">Interview</h3>
              <p className="text-gray-600">Selected candidates are invited for a personal interview.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-xl font-semibold mb-2">Selection</h3>
              <p className="text-gray-600">Final candidates are awarded the scholarship.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
