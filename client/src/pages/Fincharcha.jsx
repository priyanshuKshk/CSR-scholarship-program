import React from "react";
import "../index.css"; 
export default function Fincharcha() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            FinCharcha Program
          </h1>
          <div className="w-24 h-2 bg-blue-900 mx-auto mb-6 rounded-full">
            
          </div>
        
        </div>

        {/* Program Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Program Overview
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed" style={{padding:"5px"}}>
            <strong className="text-blue-900">FinCharcha</strong> focuses on
            developing the ability to manage personal finance matters
            efficiently. In an era where digital transactions dominate,
            financial literacy becomes crucial for inclusion and avoiding debt
            traps.
          </p>
          <div className="bg-blue-100 border-l-4 border-blue-900 p-4 rounded-r-lg" >
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
          <div className="flex space-x-2 p-3 px-3"  id="displayBlock"   >
            <div className="space-x-2" style={{margin:"0px 5px 5px 5px "}}>
            <img
                src="/images/photo4.jpg"
                alt="Community Engagement Model"
                className="w-full h-full object-cover"
                style={{
                  maxWidth: "100vw",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
            <div  className="items-center mb-4 space-x-2"
            style={{padding:"5px"}}>
            <h3 className="text-2xl font-semibold text-gray-800">
                  1. Community Engagement Model
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We train selected individuals as Master Trainers who then
                  educate their community members through our innovative
                  app-based and video-based training programs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{
                        Width: "20px",
                        height: "20px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Cascade training model
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className=" text-blue-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{
                        Width: "20px",
                        height: "20px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Localized content delivery
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className=" text-blue-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{
                        Width: "20px",
                        height: "20px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Community-led implementation
                    </span>
                  </li>
                </ul>
            </div>
          </div>
        <div className="flex" id="displayBlock">
        <div style={{padding:"5px"}}>
          <h3 className="text-2xl font-semibold text-gray-800">
                  2. Organizational Training
                </h3>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  We provide customized financial literacy training for staff
                  across organizations, including healthcare workers, SHG
                  members, and entry-level employees through flexible digital
                  platforms.
                </p>
          </div>
          <div className="space-x-2" style={{margin:"0px 5px 5px 5px"}}>
          <img
                src="/images/photo5.jpeg"
                alt="Organizational Training Model"
                className="w-full h-full object-cover flex flex-col"
                style={{
                  maxWidth: "100vw",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              />
          </div>
          
        </div>

          {/* Model 2 */}
          <div className="flex flex-col lg:flex-row-reverse gap-8 bg-white rounded-xl shadow-lg overflow-hidden">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">
                  Flexible Delivery
                </h4>
                <p className="text-sm text-gray-700">
                  App-based or video-based training tailored to your needs
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">
                  Comprehensive Assessment
                </h4>
                <p className="text-sm text-gray-700">
                  Both written and online evaluation options available
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">
                  Custom Content
                </h4>
                <p className="text-sm text-gray-700">
                  Industry-specific financial education modules
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">
                  Progress Tracking
                </h4>
                <p className="text-sm text-gray-700">
                  Detailed reporting on participant engagement
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-blue-700 rounded-xl shadow-xl  p-8 md:p-12 text-center">
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
