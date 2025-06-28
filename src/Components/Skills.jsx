import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMongodb, SiExpress, SiFirebase } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-600 text-3xl" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600 text-3xl" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500 text-3xl" /> },
    { name: 'React', icon: <FaReact className="text-cyan-500 text-3xl" /> },
    { name: 'React Router', icon: <FaReact className="text-blue-400 text-3xl" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400 text-3xl" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-3xl" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-700 text-3xl" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-3xl" /> },
    { name: 'Firebase Auth', icon: <SiFirebase className="text-yellow-500 text-3xl" /> },
    { name: 'GitHub', icon: <FaGithub className="text-black text-3xl" /> },
  ];

  return (
    <section id="skills" className="py-16 bg-base-200 w-11/12 mx-auto my-8 rounded-xl">
      <div className="w-11/12 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-10" data-aos="fade-down">
          My Skills
        </h2>

        <Marquee pauseOnHover={true} speed={60} gradient={false} data-aos="fade-up">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-6 p-4 bg-white rounded-lg shadow hover:shadow-md transition duration-300 border border-green-100 min-w-[120px]"
            >
              <div className="mb-2">{skill.icon}</div>
              <p className="text-sm font-medium text-gray-700">{skill.name}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
