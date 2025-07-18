import React from "react";
import "../index.css";

export default function Fincharcha() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            FinCharcha Program
          </h1>
          <div className="w-24 h-2 bg-blue-900 mx-auto mb-6 rounded-full" />
        </div>

        {/* Program Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Program Overview
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed px-2">
            <strong className="text-blue-900">FinCharcha</strong> focuses on
            developing the ability to manage personal finance matters
            efficiently. In an era where digital transactions dominate,
            financial literacy becomes crucial for inclusion and avoiding debt
            traps.
          </p>
          <div className="bg-blue-100 border-l-4 border-blue-900 p-4 rounded-r-lg">
            <p className="text-blue-800 italic">
              "Financial literacy is not just about money—it's about empowerment
              and creating opportunities for growth."
            </p>
          </div>
        </div>

        {/* Program Models */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Our Program Models
          </h2>

          {/* Model 1 */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            <div className="lg:w-1/2">
              <img
                src="/images/photo4.jpg"
                alt="Community Engagement Model"
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>
            <div className="lg:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                1. Community Engagement Model
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We train selected individuals as Master Trainers who then
                educate their community members through our innovative
                app-based and video-based training programs.
              </p>
              <ul className="space-y-3">
                {[
                  "Cascade training model",
                  "Localized content delivery",
                  "Community-led implementation",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Model 2 */}
          <div className="flex flex-col lg:flex-row-reverse gap-6 mb-12">
            <div className="lg:w-1/2">
              <img
                src="/images/photo5.jpeg"
                alt="Organizational Training Model"
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>
            <div className="lg:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                2. Organizational Training
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We provide customized financial literacy training for staff
                across organizations, including healthcare workers, SHG members,
                and entry-level employees through flexible digital platforms.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-xl shadow-lg p-8">
            {[
              {
                title: "Flexible Delivery",
                desc: "App-based or video-based training tailored to your needs",
              },
              {
                title: "Comprehensive Assessment",
                desc: "Both written and online evaluation options available",
              },
              {
                title: "Custom Content",
                desc: "Industry-specific financial education modules",
              },
              {
                title: "Progress Tracking",
                desc: "Detailed reporting on participant engagement",
              },
            ].map((feature, i) => (
              <div key={i} className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-blue-800 rounded-xl shadow-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            To empower citizens across India through financial literacy,
            fostering economic growth and equity in an increasingly digital
            financial landscape.
          </p>
        </div>
      </div>
    </div>
  );
}
