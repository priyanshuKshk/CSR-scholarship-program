import { motion } from "framer-motion";
import React from "react";
import "../index.css";
const AaganwadiProgram = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 p-6 flex items-center justify-center" id="paddingLow"
    >
      <motion.section
        className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading and Overview */}
        <div className="text-center px-10 pt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Aaganwadi Program
          </h1>
          <div className="w-24 h-2 bg-blue-900 mx-auto mb-6 rounded-full"
          style={{padding:"0"}}></div>
          <div className="bg-white rounded-xl shadow-lg mb-16">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our
              <strong className="text-blue-900"> Aaganwadi program </strong>
              focuses on empowering women through education, skill-building, and
              community support. These programs are designed to uplift rural
              women by fostering independence, confidence, and unity.
            </p>
          </div>
        </div>

        {/* First Section: Image Left - Text Right */}
        <div
         className="flex space-x-2 p-3 px-3"  id="displayBlock"
        >
          <div>
            <motion.img
              src="/images/aaganwadi1.jpeg"
              alt="Skill Training"
              className="w-60 h-60 object-cover rounded-full mx-auto shadow-xl"
              style={{
                Width: "100vw",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                marginRight: "5px ",
                marginTop: "10px ",
                padding:"10px"
              }}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            />
          </div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ margin: "5px" ,
              paddingLeft: "2px",
            }}
          >
            <h2 className=" text-2xl font-bold text-pink-700 mb-2">
              Skill Development
            </h2>

            <ul className="list-none  space-y-2 text-gray-800 text-lg">
              <p className="text-gray-800 text-lg  rounded-xl shadow-lg p-8 mb-16">
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
              </p>
            </ul>
          </motion.div>
        </div>

        {/* Second Section: Text Left - Image Right */}
        <div
         className="flex space-x-2 p-3 px-3"  id="displayBlock"
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ marginLeft: "20px" }}
          >
            <h2 className="text-2xl font-bold text-pink-700 mb-2">
              Community Engagement
            </h2>

            <ul className="list-none pl-5 space-y-2 text-gray-800 text-lg">
              <p className="text-gray-800 text-lg  rounded-xl shadow-lg p-8 mb-16">
                <li>
                  Aaganwadi centers act as community anchors, fostering unity
                  and social support within rural areas.
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
              </p>
            </ul>
          </motion.div>
          <div>
          <motion.img
              src="/images/aaganwadi2.jpeg"
              alt="Skill Training"
              className="w-60 h-60 object-cover rounded-full mx-auto shadow-xl"
              style={{
                Width: "100vw",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                marginRight: "10px ",
                marginTop: "10px",
              }}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            /></div>
        </div>
      </motion.section>
    </main>
  );
};

export default AaganwadiProgram;
