import React, { useState } from 'react';
import { ExternalLink, Github, XCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


const projects = [
  {
    id: 1,
    title: 'Freelancer Task Marketplace',
    image: 'https://i.ibb.co/GQxs1xLX/Screenshot-2025-06-28-233323.png',
    liveLink: 'https://tenth-assignment-repo.web.app',
    githubLink: 'https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-yasmin595',
    techStack:
      'React, Tailwind CSS, Firebase, React Router, React Toastify, SweetAlert2, React Simple Typewriter',
    description:
      'A modern, responsive web application where clients can post freelance tasks and freelancers can place bids.',
    features: [
      'Firebase authentication & real-time database',
      'Browse and post freelance tasks',
      'Freelancers can bid on tasks',
      'View task details and bid lists',
      'Light and dark mode',
      'Toast notifications and alerts',
      'Modern UI with icons and animation',
      'Fully responsive layout',
    ],
    challenges: 'Implementing bidding logic and route protection using Firebase.',
    future: 'Add real-time messaging and transaction system.',
  },
  {
    id: 2,
    title: 'Lost & Found Website',
    image: 'https://i.ibb.co/hRsTPwbC/Screenshot-2025-06-28-235158.png',
    liveLink: 'https://eleventh-assignment-168a5.web.app/',
    githubLink: 'https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-yasmin595',
    techStack:
      'React, Tailwind CSS, Framer Motion, Lottie, Firebase, Axios, Date-fns, React Toastify, React Tooltip',
    description:
      'A modern, responsive web app to help people post, discover, and recover lost items easily.',
    features: [
      'Firebase Authentication (Email/Password)',
      'Post Lost or Found Items',
      'Search & Filter Functionality',
      'Date Picker for item date',
      'Newsletter Subscription',
      'Lottie Animations & Framer Motion',
      'Toast notifications',
      'Responsive design',
    ],
    challenges: 'Integrating search & filter logic and managing real-time updates.',
    future: 'Add location-based alert system and admin dashboard.',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 bg-base-200 w-11/12 mx-auto my-8 rounded-xl">
      <div className="text-center max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-10" data-aos="fade-down">
          My Projects
        </h2>

        <div className="grid my-8 md:grid-cols-2   gap-8 px-4" data-aos="fade-up">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white shadow p-8  rounded-lg overflow-hidden border-green-200 hover:shadow-md transition duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-11/12 h-40  object-cover"
              />
              <div className="p-8 text-left">
                <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-4 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 flex items-center gap-2"
                >
                  <ExternalLink size={16} /> View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white p-6 rounded-md w-full max-w-xl relative overflow-y-auto max-h-[90vh] shadow-xl border border-green-100"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-2 right-2 text-xl font-bold text-red-500"
                >
                  <XCircle size={24} />
                </button>
                <h3 className="text-2xl font-semibold mb-3 text-green-700 flex items-center gap-2">
                  <Sparkles size={20} className="text-yellow-500" /> {selectedProject.title}
                </h3>
                <div className="mb-3 flex flex-wrap gap-2">
                  {selectedProject.techStack.split(',').map((tech, i) => (
                    <span
                      key={i}
                      className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
                <p className="mb-2 text-gray-700">
                  <strong>Description:</strong> {selectedProject.description}
                </p>
                <div className="mb-2">
                  <strong>Features:</strong>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
                    {selectedProject.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
                <p className="mb-2 text-gray-700">
                  <strong>Challenges:</strong> {selectedProject.challenges}
                </p>
                <p className="mb-4 text-gray-700">
                  <strong>Future Plans:</strong> {selectedProject.future}
                </p>
                <div className="flex justify-between text-sm pt-2">
                  <a
                    href={selectedProject.liveLink}
                    className="text-green-600 hover:underline flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} /> Live Site
                  </a>
                  <a
                    href={selectedProject.githubLink}
                    className="text-blue-600 hover:underline flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
