import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  GraduationCap,
  BadgeCheck,
  PercentCircle,
  CalendarClock,
  IndianRupee,
  ArrowRightCircle
} from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function EligibilityPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-white"
    >
      <section className="max-w-4xl mx-auto p-6">
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold mb-6 text-center text-blue-900"
        >
          Eligibility <span className="text-blue-600">Criteria</span>
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="bg-white shadow-xl rounded-xl overflow-hidden border border-blue-100"
        >
          <table className="min-w-full table-auto">
            <tbody>
              <tr className="border-b hover:bg-blue-50 transition">
                <td className="p-4 font-semibold flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-blue-700" />
                  Degree Course
                </td>
                <td className="p-4">
                  BBA, BFIA, B.Com (H,E), BMS, IPM, BA (Economics), BBI, BAF, BSc Stats
                </td>
              </tr>

              <tr className="border-b hover:bg-blue-50 transition">
                <td className="p-4 font-semibold flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-green-600" />
                  Minimum Qualification
                </td>
                <td className="p-4">Class 12th</td>
              </tr>

              <tr className="border-b hover:bg-blue-50 transition">
                <td className="p-4 font-semibold flex items-center gap-2">
                  <PercentCircle className="h-5 w-5 text-purple-600" />
                  Minimum Marks in Qualifying Exams
                </td>
                <td className="p-4">
                  If admission is based on school exam marks, then:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Class 10th: 80%</li>
                    <li>Class 12th: 80%</li>
                  </ul>
                </td>
              </tr>

              <tr className="border-b hover:bg-blue-50 transition">
                <td className="p-4 font-semibold flex items-center gap-2">
                  <CalendarClock className="h-5 w-5 text-orange-600" />
                  Age
                </td>
                <td className="p-4">Maximum 20 years as on 31.05.2025</td>
              </tr>

              <tr className="hover:bg-blue-50 transition">
                <td className="p-4 font-semibold flex items-center gap-2">
                  <IndianRupee className="h-5 w-5 text-emerald-600" />
                  Annual Family Income
                </td>
                <td className="p-4">Less than Rs. 4 Lakhs</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mt-8">
          <Link to="/scholarship-form">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-900 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-xl flex items-center gap-2 justify-center mx-auto"
              style={{margin:"10px"}}
            >
              <ArrowRightCircle className="h-5 w-5" />
              Apply Now
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </motion.div>
  )
}
