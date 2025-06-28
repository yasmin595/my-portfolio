import React from 'react';
import avatar from '../assets/woman.jpg';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaFacebook, FaXTwitter } from 'react-icons/fa6'; // FaTwitter also works

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto my-8 ">
      <div className="hero min-h-screen bg-base-200 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          
          {/* Avatar */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={avatar}
              alt="Profile"
              className="rounded-full w-54 h:54 md:w-80 md:h-80 object-cover shadow-2xl border-4 border-green-700"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-4xl font-bold text-green-700 mb-4">
              Hi, I'm Suborna Yasmin
            </h1>

            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              <span className="mr-2">I'm a</span>
              <span className="text-yellow-600">
                <Typewriter
                  words={['Frontend Developer', 'React Learner', 'Creative Coder']}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p className="text-gray-600 mb-6 font-semibold">
              Passionate about crafting beautiful and user-friendly web applications with React & Tailwind.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 mb-6">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl text-gray-700 hover:text-green-700 transition" />
              </a>
              <a href="https://x.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="text-2xl text-gray-700 hover:text-green-700 transition" />
              </a>
              <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl text-gray-700 hover:text-green-700 transition" />
              </a>
            </div>

            {/* CTA Button */}
            <a href="#contact">
              <button className="btn bg-green-700 hover:bg-green-800 text-white transition">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
