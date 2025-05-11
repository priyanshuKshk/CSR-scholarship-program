import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText } from 'react-icons/fi';

const reports = [
  { year: "2023", file: "/reports/annual-report-2023.pdf" },
  { year: "2022", file: "/reports/annual-report-2022.pdf" },
];

export default function AnnualReport() {
  return (
    <div className="bg-white py-12 px-6 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10">Annual Reports</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {reports.map((report, index) => (
          <motion.div
            key={index}
            className="p-6 border rounded-lg shadow hover:shadow-md transition flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4">
              <FiFileText className="text-2xl text-blue-700" />
              <div>
                <h3 className="text-xl font-semibold">Report - {report.year}</h3>
              </div>
            </div>
            <a
              href={report.file}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View PDF
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
