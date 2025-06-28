import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-16 bg-base-200 w-11/12 mx-auto my-8 rounded-xl">
      <div className="w-11/12 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6" data-aos="fade-down">
          Education
        </h2>

        <p className="text-gray-700 mb-12 max-w-2xl mx-auto text-sm md:text-base" data-aos="fade-up" data-aos-delay="100">
          I'm currently studying B.Sc Honours in Zoology at Comilla Women's Government College. With a strong foundation in science, I completed my SSC with a perfect GPA of 5.00 and continued with a solid GPA of 4.74 in HSC. I'm passionate about combining my academic knowledge with technology and continuous learning.
        </p>

        <div className="space-y-6 text-left">
          <div
            className="p-6 bg-white rounded-lg shadow border-l-4 border-green-500"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-semibold text-gray-800">B.Sc Honours in Zoology</h3>
            <p className="text-gray-600">Comilla Women's Government College, Cumilla</p>
            <p className="text-sm text-gray-500">1st Year (Running)</p>
          </div>

          <div
            className="p-6 bg-white rounded-lg shadow border-l-4 border-green-500"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h3 className="text-xl font-semibold text-gray-800">Higher Secondary Certificate (HSC)</h3>
            <p className="text-gray-600">Science Group – GPA: 4.74</p>
            <p className="text-sm text-gray-500">Year: 2024</p>
          </div>

          <div
            className="p-6 bg-white rounded-lg shadow border-l-4 border-green-500"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <h3 className="text-xl font-semibold text-gray-800">Secondary School Certificate (SSC)</h3>
            <p className="text-gray-600">Science Group – GPA: 5.00</p>
            <p className="text-sm text-gray-500">Year: 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
