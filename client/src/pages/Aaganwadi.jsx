import { motion } from "framer-motion";
import React from "react";
import "../index.css";

const AaganwadiProgram = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br p-6 flex items-center justify-center">
      <motion.section
        className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden max-w-7xl w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading and Overview */}
        <div className="text-center px-6 pt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Aaganwadi Program
          </h1>
          <div className="w-24 h-1.5 bg-blue-900 mx-auto mb-6 rounded-full"></div>
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our
              <strong className="text-blue-900"> Aaganwadi program </strong>
              focuses on empowering women through education, skill-building, and
              community support. These programs are designed to uplift rural
              women by fostering independence, confidence, and unity.
            </p>
          </div>
        </div>

        {/* First Section: Image Left - Text Right */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 px-6 pb-12">
          <motion.img
            src="/images/aaganwadi1.jpeg"
            alt="Skill Training"
            className="w-full md:w-[500px] h-auto rounded-xl shadow-xl"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          />

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex-1"
          >
            <h2 className="text-2xl font-bold text-pink-700 mb-4">
              Skill Development
            </h2>
            <ul className="space-y-3 bg-white rounded-xl shadow-lg p-6 text-gray-800 text-lg">
              <li>
                Vocational training equips women with practical skills such as
                tailoring, handicrafts, computer literacy, and more.
              </li>
              <li>
                Women gain the confidence to participate actively in community
                development and decision-making processes.
              </li>
              <li>
                Training programs also include financial literacy and
                entrepreneurship guidance to help women manage income
                effectively.
              </li>
              <li>
                Empowered women are more likely to invest in their children’s
                education and family well-being.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Second Section: Text Left - Image Right */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 px-6 pb-16">
          <motion.img
            src="/images/aaganwadi2.jpeg"
            alt="Community Engagement"
            className="w-full md:w-[500px] h-auto rounded-xl shadow-xl"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          />

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex-1"
          >
            <h2 className="text-2xl font-bold text-pink-700 mb-4">
              Community Engagement
            </h2>
            <ul className="space-y-3 bg-white rounded-xl shadow-lg p-6 text-gray-800 text-lg">
              <li>
                Aaganwadi centers act as community anchors, fostering unity and
                social support within rural areas.
              </li>
              <li>
                They provide essential nutritional aid to expectant mothers,
                nursing women, and young children to combat malnutrition.
              </li>
              <li>
                Basic health education is offered to raise awareness about
                hygiene, disease prevention, and maternal care.
              </li>
              <li>
                Parenting workshops, mental health support, and awareness
                campaigns empower women with knowledge and confidence.
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default AaganwadiProgram;
