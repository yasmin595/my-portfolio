import React from 'react';

const Contact = () => {
    
  return (
    <section id="contact" className="py-16 bg-base-200 w-11/12 mx-auto my-8 rounded-xl">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-12" data-aos="fade-down">
          Contact
        </h2>

        <div className="grid md:grid-cols-2  gap-4" data-aos="fade-up">
          {/* WhatsApp Contact Info */}
          <div className="bg-white rounded-lg shadow p-6 border border-green-200">
            <h3 className="text-lg font-semibold text-green-700 mb-4">Contact Information</h3>
            <p className="text-gray-700 mb-2">
               <strong>  email:</strong> yasminsuborna8@gmail.com
            </p>
            <p className="text-gray-700 mb-2">
               <strong>Phone /WhatsApp:</strong> +8801989901898
            </p>
            <p className="text-gray-700 text-sm">
               Feel free to message me directly on WhatsApp for quick replies.
            </p>
          </div>
{/* email */}
        <div className="bg-white rounded-lg shadow p-6 border border-green-200">
            <form>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 mb-4 border border-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 mb-4 border border-green-700 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              ></textarea>
              <button
                type="button"
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
              >
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
