import React, { useState } from "react";
import { ExternalLink, Github, XCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Medical Camp Management System",
    image: "https://i.ibb.co.com/6J0y9Bkk/Screenshot-2025-09-04-223318.png",
    liveLink: "https://twelfth-assignment-86afb.web.app/",
    clientCode: "https://github.com/yasmin595/twelfth-repo",
    serverCode: "https://github.com/yasmin595/twelfth-server-p",
    techStack:
      "React, Tailwind CSS, Firebase, React Router, MongoDB, Express.js, Stripe, Axios, React Query, SweetAlert2, React Toastify",
    description:
      "A role-based medical camp management platform that allows admins, organizers, and participants to efficiently manage medical camps, registrations, and payments.",
    features: [
      "Role-based dashboards for Admin, Organizer, and Participant",
      "Add, update, and delete medical camps",
      "Join and manage camp participation",
      "Secure Stripe payment integration",
      "Real-time notifications for approvals, submissions, and withdrawals",
      "View and manage participant profiles",
      "Feedback collection system",
      "Responsive and user-friendly UI",
    ],
    challenges:
      "Implementing role-based authentication and integrating Stripe payments.",
    future:
      "Add live chat between organizers and participants, and automated email notifications.",
  },
  {
    id: 2,
    title: "WhereIsIt",
    image: "https://i.ibb.co/hRsTPwbC/Screenshot-2025-06-28-235158.png",
    liveLink: "https://eleventh-assignment-168a5.web.app/",
    clientCode: "https://github.com/yasmin595/eleventh-assignmnet",
    serverCode: "https://github.com/yasmin595/eleventh-assignmnet-server-p",
    techStack:
      "React, Tailwind CSS, Framer Motion, Lottie, Firebase, React Router, Express.js, MongoDB, JWT",
    description:
      "A modern, responsive web app to help people post, discover, and recover lost items easily.",
    features: [
      "Firebase Authentication (Email/Password)",
      "Post Lost or Found Items",
      "Search & Filter Functionality",
      "Date Picker for item date",
      "Newsletter Subscription",
      "Lottie Animations & Framer Motion",
      "Toast notifications",
      "Responsive design",
    ],
    challenges:
      "Integrating search & filter logic and managing real-time updates.",
    future: "Add location-based alert system and admin dashboard.",
  },
  {
    id: 3,
    title: "Freelancer Task Marketplace",
    image: "https://i.ibb.co/GQxs1xLX/Screenshot-2025-06-28-233323.png",
    liveLink: "https://tenth-assignment-repo.web.app",
    clientCode: "https://github.com/yasmin595/tenth-assignment-repo-p",
    serverCode: "https://github.com/yasmin595/tenth-assignment-server-p",
    techStack:
      "React, Tailwind CSS, Firebase, React Router, MongoDB, Express.js, React Simple Typewriter",
    description:
      "A modern, responsive web application where clients can post freelance tasks and freelancers can place bids.",
    features: [
      "Firebase authentication & real-time database",
      "Browse and post freelance tasks",
      "Freelancers can bid on tasks",
      "View task details and bid lists",
      "Light and dark mode",
      "Toast notifications and alerts",
      "Modern UI with icons and animation",
      "Fully responsive layout",
    ],
    challenges: "Implementing bidding logic and route protection using Firebase.",
    future: "Add real-time messaging and transaction system.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-r from-green-50 to-yellow-50 w-11/12 mx-auto my-8 rounded-xl"
    >
      <div className="text-center max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-10">
          🚀 My Projects
        </h2>

   <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 px-4">
  {projects.map((project) => (
    <motion.div
      key={project.id}
      className="bg-white rounded-xl shadow-lg border border-green-100 hover:shadow-2xl transition duration-300 flex flex-col md:flex-row overflow-hidden"
      whileHover={{ scale: 1.02 }}
    >
      {/* Left Image */}
      <div className="md:w-1/2">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 md:h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-green-600 mb-2">
            {project.title}
          </h3>
          <p className="text-gray-700 text-sm mb-3">
            {project.description}
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4 space-y-1">
            {project.features.slice(0, 3).map((f, i) => (
              <li key={i}>{f}</li>
            ))}
            <li className="text-green-600 font-medium">
              + More in Details
            </li>
          </ul>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.split(",").slice(0, 6).map((tech, i) => (
              <span
                key={i}
                className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-4">
          <a
            href={project.liveLink}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2 text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} /> Live
          </a>
          <a
            href={project.clientCode}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 flex items-center gap-2 text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} /> Client Code
          </a>
          <a
            href={project.serverCode}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 flex items-center gap-2 text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} /> Server Code
          </a>
          <button
            onClick={() => setSelectedProject(project)}
            className="ml-auto bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 flex items-center gap-2 text-sm"
          >
            <ExternalLink size={16} /> View Details
          </button>
        </div>
      </div>
    </motion.div>
  ))}
</div>


        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white p-6 rounded-xl w-full max-w-3xl relative overflow-y-auto max-h-[90vh] shadow-xl border border-green-200"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 text-red-500 hover:text-red-600"
                >
                  <XCircle size={28} />
                </button>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-3 text-green-600 flex items-center gap-2">
                  <Sparkles size={22} className="text-yellow-500" />{" "}
                  {selectedProject.title}
                </h3>
                <div className="mb-3 flex flex-wrap gap-2">
                  {selectedProject.techStack.split(",").map((tech, i) => (
                    <span
                      key={i}
                      className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
                <p className="mb-2 text-gray-700">
                  <strong>Description:</strong> {selectedProject.description}
                </p>
                <div className="mb-3">
                  <strong>Features:</strong>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1">
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
                <div className="flex flex-wrap gap-3 justify-between pt-3">
                  <a
                    href={selectedProject.liveLink}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} /> Live Site
                  </a>
                  <a
                    href={selectedProject.clientCode}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} /> Client Code
                  </a>
                  <a
                    href={selectedProject.serverCode}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} /> Server Code
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
