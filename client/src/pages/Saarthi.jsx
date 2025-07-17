import { motion } from "framer-motion";
import React from "react";
import "../index.css";

const Saarthi = () => {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-blue-100 via-indigo-100 to-purple-200 flex items-center justify-center p-4">
      <motion.section
        className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl max-w-6xl w-full overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading and Intro */}
        <div className="text-center px-6 md:px-10 pt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Saarthi: Career Counseling Program
          </h1>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            Saarthi is a dedicated initiative aimed at guiding students and youth in rural areas
            to make informed and confident career choices. Through expert advice, mentoring, and
            awareness programs, we help build a future full of possibilities.
          </p>
        </div>

        {/* Section 1: Guidance & Mentoring */}
        <div className="grid md:grid-cols-2 items-center gap-8 px-6 md:px-10 py-12">
          <div>
            <motion.img
              src="/images/saarthi1.jpeg"
              alt="Career Guidance"
              className="mx-auto rounded-2xl md:rounded-3xl shadow-xl max-w-full h-auto p-2"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            />
          </div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="ml-0 md:ml-6 p-2"
          >
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">Career Guidance & Mentoring</h2>
            <ul className="pl-5 space-y-2 text-gray-800 text-lg rounded-xl shadow-lg p-8 mb-16 list-disc">
              <li>One-on-one counseling sessions with certified career experts.</li>
              <li>Guidance on stream selection after 10th and 12th class.</li>
              <li>Support for competitive exam preparation (NEET, JEE, UPSC, etc.).</li>
              <li>Exposure to diverse career paths beyond conventional options.</li>
            </ul>
          </motion.div>
        </div>

        {/* Section 2: Workshops and Skill Awareness */}
        <div className="grid md:grid-cols-2 items-center gap-8 px-6 md:px-10 pb-12">
          <div>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="m-2"
            >
              <h2 className="text-2xl font-bold text-indigo-700 mb-4">Workshops & Career Awareness</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-800 text-lg rounded-xl shadow-lg p-8 mb-16">
                <li>Interactive sessions in schools and villages to spread awareness.</li>
                <li>Workshops on resume building, soft skills, and interview preparation.</li>
                <li>Visits by professionals to share real-life experiences and career journeys.</li>
                <li>Free access to career-related resources and webinars.</li>
              </ul>
            </motion.div>
          </div>
          <div>
            <motion.img
              src="/images/saarthi3.jpeg"
              alt="Workshops"
              className="mx-auto rounded-2xl md:rounded-3xl shadow-xl max-w-full h-auto p-2"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            />
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Saarthi;
