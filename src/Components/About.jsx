import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-base-200 w-11/12 mx-auto my-8 rounded-xl">
      <div className="w-11/12 max-w-4xl mx-auto" data-aos="fade-up">
        <div className="border border-green-200 shadow-md rounded-xl p-6 md:p-10 bg-white">

          <h2
            className="text-2xl md:text-3xl font-bold text-green-700 mb-6 text-center"
            data-aos="fade-down"
          >
            About Me
          </h2>

          <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-4 text-center md:text-left">

            <p>
              I'm <span className="font-semibold text-green-700">Suborna Yasmin</span> — a passionate React developer and lifelong learner from Cumilla, Bangladesh. I'm currently a 1st-year Bachelor's student at <span className="font-medium">Comilla Government Women's College</span> and a proud participant of the <span className="font-medium">Programming Hero Bootcamp (Level-1, Batch-11)</span>.
            </p>

            <p>
              My tech stack includes <span className="text-green-800 font-medium">React, React Router, Tailwind CSS, Express.js,</span> and <span className="text-green-800 font-medium">MongoDB</span>. I love creating responsive, user-friendly interfaces and learning how frontend and backend connect to build complete solutions.
            </p>

            <p>
              Web development inspires me because it's where **creativity meets logic** — it gives me the power to turn imagination into interactive reality. Every line of code brings me closer to building something meaningful and accessible.
            </p>

            <p>
              I aspire to become a skilled <span className="font-semibold">full-stack developer</span> and work remotely on impactful global projects. Learning something new every day is my motivation and growth is my goal.
            </p>

            <p>
              Besides coding, I enjoy <span className="italic">gardening</span>. Watching tiny seeds grow into beautiful plants reminds me that success — in code or in life — takes patience, consistency, and care. 
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
