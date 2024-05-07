import React from 'react';

const Services = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="service-card bg-white rounded-lg shadow-md p-8 transition duration-300 ease-in-out hover:bg-blue-100">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Personalized Support
            </h3>
            <p className="text-gray-600">
              We provide personalized support tailored to meet the unique needs of each individual, ensuring a smooth transition into adulthood.
            </p>
          </div>
          {/* Service Card 2 */}
          <div className="service-card bg-white rounded-lg shadow-md p-8 transition duration-300 ease-in-out hover:bg-blue-100">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Life Skills Training
            </h3>
            <p className="text-gray-600">
              Our life skills training program focuses on developing essential skills for independent living through practical workshops and activities.
            </p>
          </div>
          {/* Service Card 3 */}
          <div className="service-card bg-white rounded-lg shadow-md p-8 transition duration-300 ease-in-out hover:bg-blue-100">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Community Engagement
            </h3>
            <p className="text-gray-600">
              Our community engagement program encourages social interaction and involvement within the community to foster a sense of belonging and inclusion.
            </p>
          </div>
          {/* Service Card 4 */}
          <div className="service-card bg-white rounded-lg shadow-md p-8 transition duration-300 ease-in-out hover:bg-blue-100">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Social Skills Development
            </h3>
            <p className="text-gray-600">
              Enhance interpersonal communication, relationship-building, and social interaction skills. Through structured activities, role-playing exercises, and group discussions, improve social skills in various settings.
            </p>
          </div>
          {/* Service Card 5 */}
          <div className="service-card bg-white rounded-lg shadow-md p-8 transition duration-300 ease-in-out hover:bg-blue-100">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Recreational Therapy
            </h3>
            <p className="text-gray-600">
              Engaging and therapeutic recreational activities to promote physical, emotional, and social well-being.
            </p>
          </div>
          {/* Service Card 6 */}
          <div className="service-card bg-white rounded-lg shadow-md p-8  hover:bg-blue-100">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Parent Education and Support
            </h3>
            <p className="text-gray-600">
              Our parent education and support program offers resources, workshops, and support groups to empower parents and caregivers of individuals with disabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
