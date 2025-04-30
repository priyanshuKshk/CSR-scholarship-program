import React from 'react'
import { Link } from 'react-router-dom'

export default function EligibilityPage  (){
  return (
    <div> {/* Eligibility Criteria */}
   <section className=" tagesschrift-regular max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">
        Eligibility <span className="text-orange-500">Criteria</span>
      </h2>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full table-auto">
          <tbody>
            <tr className="border-b">
              <td className="p-4 font-semibold">Degree Course</td>
              <td className="p-4">
                BBA, BFIA, B.Com (H,E), BMS, IPM, BA (Economics), BBI, BAF, BSc Stats
              </td>
            </tr>

            <tr className="border-b">
              <td className="p-4 font-semibold">Minimum Qualification</td>
              <td className="p-4">Class 12th</td>
            </tr>

            <tr className="border-b">
              <td className="p-4 font-semibold">Minimum Marks in Qualifying Exams</td>
              <td className="p-4">
                If admission is based on school exam marks, then:
                <ul className="list-disc pl-6 mt-2">
                  <li>Class 10th: 80%</li>
                  <li>Class 12th: 80%</li>
                </ul>
              </td>
            </tr>

            <tr className="border-b">
              <td className="p-4 font-semibold">Age</td>
              <td className="p-4">Maximum 20 years as on 31.05.2025</td>
            </tr>

            <tr>
              <td className="p-4 font-semibold">Annual Family Income</td>
              <td className="p-4">Less than Rs. 4 Lakhs</td>
            </tr>
          </tbody>
        
      </table>
      </div>
      <Link to="/scholarship-form" className="inline-block animate-fadeIn delay-200">
        <button className="bg-blue-900 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg animate-fadeIn delay-200">
          Apply Now
        </button>
        </Link>
    </section>
        </div>
  )
}
