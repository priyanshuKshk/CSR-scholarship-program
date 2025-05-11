const About = () => {
  const initiatives = [
    "Scholarships",
    "Fincharcha – Financial Literacy",
    "Saarthi – Career Counselling",
    "Anganwadi Transformation Programs"
  ];

  return (
    <div className="flex flex-col items-center px-4 md:px-20 py-10 space-y-12">

      {/* About Us Intro */}
      <section className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-gray-600 text-lg">
          We believe that education is an essential tool for the upliftment of society. 
          To ensure equal opportunities for marginalized communities, the Neeraj Mittal Foundation 
          has launched several initiatives like SMG Asha Education Centers, Pathashala, scholarships, 
          Fincharcha for financial literacy, Saarthi for career counselling, and Anganwadi transformation programs. 
          These efforts have created a transformative impact on the lives of students, teachers, and the entire community.
        </p>
      </section>

      {/* Initiatives List */}
      <section className="w-full">
        <h2 className="text-3xl font-bold text-center mb-8">Our Initiatives</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {initiatives.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center"
            >
              <p className="text-gray-800 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6">Impact</h2>
        <p className="text-gray-600 text-lg">
          Our efforts have touched the lives of thousands, enabling students to pursue education, 
          empowering teachers, and uplifting entire communities towards a brighter future.
        </p>
      </section>

      {/* Giving Wings Section */}
      <section className="bg-blue-50 w-full py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-blue-700 mb-6">Giving Wings to Dreams!</h2>
          <p className="text-gray-700 text-lg">
            India has some of the brightest minds in the world. However, many talented and deserving 
            students from poor backgrounds are unable to pay for their education—a prerequisite 
            for pursuing any career. The Saurav Mittal Group's Neeraj Mittal Scholarships offer 
            them just what they need: financial support to pursue finance-related courses and 
            build a promising career and a better life.
          </p>
        </div>
      </section>

      {/* Scholarship Details */}
      <section className="max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-6">Scholarship Award</h2>
        <p className="text-gray-700 text-lg mb-4">
          Scholarship of <strong>Rs. 50,000 to Rs. 5,00,000</strong> is awarded to each student 
          per year for a period of <strong>3 years</strong> for completing their education.
        </p>
        <p className="text-sm text-gray-500">
          (The exact scholarship amount depends on the accepted college fees.)
        </p>
      </section>

    </div>
  );
};

export default About;
