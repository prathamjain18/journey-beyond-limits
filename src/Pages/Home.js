// Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero section */}
      <div className="bg-gray-800 text-white py-8">
        <div className="max-w-4xl px-8 py-12 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Journey Beyond Limits
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Empowering disabled children to transition to adulthood with confidence and support.
          </p>
          <div>
            <a
              href="/services"
              className="bg-white text-blue-500 font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* About section */}
      <div className="py-16">
        <div className="max-w-4xl px-8 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            Who are we?
          </h2>
          <p className="text-lg text-gray-600">
            Journey Beyond Limits is dedicated to providing comprehensive support and resources for disabled children as they transition into adulthood. Our mission is to empower them with the skills and confidence they need to lead fulfilling lives.
          </p>
        </div>
      </div>

      {/* Testimonials section */}
      <div className="bg-gray-200 py-16">
        <div className="max-w-4xl px-8 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="testimonial-card bg-white rounded-lg shadow-md p-6 transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-100">
              <p className="text-lg text-gray-800 mb-4">
                "Journey Beyond Limits has been a lifeline for our family. Their support and guidance have helped our child navigate the challenges of adulthood with confidence."
              </p>
              <p className="text-gray-600 font-semibold">- Wilson, Parent</p>
            </div>
            {/* Testimonial 2 */}
            <div className="testimonial-card bg-white rounded-lg shadow-md p-6 transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-100">
              <p className="text-lg text-gray-800 mb-4">
                "Thanks to Journey Beyond Limits, our son has developed valuable life skills and found a sense of belonging in his community. We're grateful for their commitment to his success."
              </p>
              <p className="text-gray-600 font-semibold">- Mark, Parent</p>
            </div>
            {/* Testimonial 3 */}
            <div className="testimonial-card bg-white rounded-lg shadow-md p-6 transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-100">
              <p className="text-lg text-gray-800 mb-4">
                "I've grown so much since joining Journey Beyond Limits. The support and encouragement I've received have empowered me to pursue my dreams and live life to the fullest."
              </p>
              <p className="text-gray-600 font-semibold">- Sarah, Participant</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className="bg-gray-800 text-white pt-12 pb-6"> {/* Adjusted padding */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to start the journey?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Contact us today to learn more about how we can support your child's transition to adulthood.
          </p>
          <div>
            <a
              href="/team"
              className="bg-white text-blue-500 font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
