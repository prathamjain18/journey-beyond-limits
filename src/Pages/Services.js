import React from 'react';
import { useSpring, animated, config, useTrail } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const titleFadeAnimation = useSpring({ opacity: inView ? 1 : 0, from: { opacity: 0 }, config: config.slow });

  const servicesTrail = useTrail(servicesData.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(50px)',
    config: config.stiff,
    delay: 300,
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <animated.h2 ref={ref} className="text-3xl font-bold text-center text-gray-800 mb-8" style={titleFadeAnimation}>
          Our Services
        </animated.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Cards */}
          {servicesData.map((service, index) => (
            <ServiceCard key={index} index={index} service={service} animationProps={servicesTrail[index]} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ index, service, animationProps }) => {
  return (
    <animated.div
      className="service-card bg-white rounded-lg shadow-md p-8 transition-all duration-500 ease-in-out hover:scale-105 hover:bg-blue-100"
      style={animationProps}
    >
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </animated.div>
  );
};

// Example data for service cards
const servicesData = [
  {
    title: 'Personalized Support',
    description: 'We provide personalized support tailored to meet the unique needs of each individual, ensuring a smooth transition into adulthood.',
  },
  {
    title: 'Life Skills Training',
    description: 'Our life skills training program focuses on developing essential skills for independent living through practical workshops and activities.',
  },
  {
    title: 'Community Engagement',
    description: 'Our community engagement program encourages social interaction and involvement within the community to foster a sense of belonging and inclusion.',
  },
  {
    title: 'Social Skills Development',
    description: 'Enhance interpersonal communication, relationship-building, and social interaction skills. Through structured activities, role-playing exercises, and group discussions, improve social skills in various settings.',
  },
  {
    title: 'Recreational Therapy',
    description: 'Engaging and therapeutic recreational activities to promote physical, emotional, and social well-being.',
  },
  {
    title: 'Parent Education and Support',
    description: 'Our parent education and support program offers resources, workshops, and support groups to empower parents and caregivers of individuals with disabilities.',
  },
];

export default Services;
