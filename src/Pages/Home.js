import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [resilienceRef, resilienceInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const heroAnimation = useSpring({
    opacity: heroInView ? 1 : 0,
    marginTop: heroInView ? 0 : -50,
    config: { duration: 1000 },
  });

  const resilienceAnimation = useSpring({
    opacity: resilienceInView ? 1 : 0,
    config: { duration: 1000 },
  });

  const resilienceCardAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 },
    delay: 300,
  });

  const contactAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 },
    delay: 600,
  });

  return (
    <main className="bg-gray-100 min-h-screen" role="main">
      <div ref={heroRef}>
        <animated.section style={heroAnimation} className="bg-gray-800 text-white py-8" aria-labelledby="home-hero-title">
          <div className="max-w-4xl px-8 py-12 mx-auto text-center">
            <h1 id="home-hero-title" className="text-4xl md:text-6xl font-bold mb-4" tabIndex="0">
              Journey Beyond Limits
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Supporting individuals with disabilities to transition to adulthood with confidence and support.
            </p>
            <div>
              <Link to="/ResearchProjects" className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-700 hover:text-white focus:outline focus:ring-2 focus:ring-blue-700" tabIndex="0">
                Learn More
              </Link>
            </div>
          </div>
        </animated.section>
      </div>

      <div ref={resilienceRef}>
        <animated.section style={resilienceAnimation} className="bg-gray-200 py-16" aria-labelledby="resilience-title">
          <div className="max-w-4xl px-8 mx-auto">
            <h2 id="resilience-title" className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center" tabIndex="0">
              The Importance of Resilience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <animated.div style={resilienceCardAnimation}>
                <div className="resilience-card bg-white rounded-lg shadow-md p-6 transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-100" tabIndex="0">
                  <p className="text-lg text-gray-800 mb-4">
                    Resilience is the ability to adapt and recover from adversity. It empowers individuals to face challenges head-on and emerge stronger.
                  </p>
                </div>
              </animated.div>
              <animated.div style={resilienceCardAnimation}>
                <div className="resilience-card bg-white rounded-lg shadow-md p-6 transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-100" tabIndex="0">
                  <p className="text-lg text-gray-800 mb-4">
                    Building resilience is essential for navigating life's transitions, particularly for those with disabilities transitioning to adulthood.
                  </p>
                </div>
              </animated.div>
              <animated.div style={resilienceCardAnimation}>
                <div className="resilience-card bg-white rounded-lg shadow-md p-6 transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-100" tabIndex="0">
                  <p className="text-lg text-gray-800 mb-4">
                    At Journey Beyond Limits, we foster resilience by providing the support and resources needed to overcome obstacles and thrive.
                  </p>
                </div>
              </animated.div>
            </div>
          </div>
        </animated.section>
      </div>

      <animated.section style={contactAnimation} aria-labelledby="contact-title">
        <div className="bg-gray-800 text-white pt-12 pb-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="contact-title" className="text-3xl md:text-4xl font-bold mb-4" tabIndex="0">
              Ready to start the journey?
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Contact us today to learn more about how we can support your child's transition to adulthood.
            </p>
            <div>
              <Link to="/team" className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-700 hover:text-white focus:outline focus:ring-2 focus:ring-blue-700" tabIndex="0">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </animated.section>
    </main>
  );
};

export default Home;
