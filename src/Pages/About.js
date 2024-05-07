import React from 'react';
import { useSpring, animated, config } from 'react-spring';

const About = () => {
  const fadeAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, config: config.molasses });
  const slideAnimation = useSpring({ opacity: 1, marginTop: 0, from: { opacity: 0, marginTop: -100 }, config: config.molasses });
  const parallaxImage = useSpring({
    transform: 'translateY(0px)',
    from: { transform: 'translateY(-50px)' },
    config: { mass: 1, tension: 120, friction: 14 }
  });

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <animated.h2 className="text-3xl font-bold text-center text-gray-800 mb-8" style={fadeAnimation}>
          About Us
        </animated.h2>
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="md:w-1/3">
            <animated.img
              src="https://media.actionforchildren.org.uk/images/happy_boy_in_a_wheelchair.width-1000.jpg"
              alt="About Us"
              className="rounded-lg shadow-lg w-full mb-4"
              style={{ ...parallaxImage, ...fadeAnimation }}
            />
            <animated.img
              src="https://www.unicef.ca/sites/default/files/styles/share_fb/public/blog_feature_image/unicef_disability_day.jpg?itok=1nEbTDnZ"
              alt="About Us"
              className="rounded-lg shadow-lg w-full mb-4"
              style={{ ...parallaxImage, ...fadeAnimation }}
            />
            <animated.img
              src="https://www.shutterstock.com/shutterstock/photos/1433398475/display_1500/stock-photo-disabled-child-on-wheelchair-and-his-dad-standing-on-the-green-bridge-in-city-park-of-thailand-1433398475.jpg"
              alt="About Us"
              className="rounded-lg shadow-lg w-full mb-4"
              style={{ ...parallaxImage, ...fadeAnimation }}
            />
          </div>
          <animated.div className="md:w-1/2 mt-8 md:mt-0" style={slideAnimation}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Journey Beyond Limits, our mission is to provide comprehensive services and support to disabled children
              as they transition into adulthood. We strive to empower each individual to reach their full potential and lead
              fulfilling lives.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We are a dedicated team of professionals including educators, therapists, social workers, and advocates who are
              passionate about making a positive difference in the lives of disabled children and their families. With years
              of experience and expertise, we are committed to offering personalized services tailored to meet the unique
              needs of each individual.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h3>
            <ul className="list-disc text-gray-700 pl-6 mb-6">
              <li className="mb-2">Compassion</li>
              <li className="mb-2">Inclusivity</li>
              <li className="mb-2">Empowerment</li>
              <li className="mb-2">Collaboration</li>
              <li className="mb-2">Respect</li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Impact</h3>
            <div className="flex flex-col items-center mb-6">
              <p className="text-gray-700">75% of our participants reported increased self-confidence</p>
              <div className="w-full bg-gray-300 rounded-full h-4 mb-2">
                <animated.div className="bg-blue-500 rounded-full h-4" style={{ ...fadeAnimation, width: '75%' }}></animated.div>
              </div>
            </div>
            <div className="flex flex-col items-center mb-6">
              <p className="text-gray-700">50% increase in educational achievements</p>
              <div className="w-full bg-gray-300 rounded-full h-4 mb-2">
                <animated.div className="bg-blue-500 rounded-full h-4" style={{ ...fadeAnimation, width: '50%' }}></animated.div>
              </div>
            </div>
            <div className="flex flex-col items-center mb-6">
              <p className="text-gray-700">80% of families reported improved quality of life</p>
              <div className="w-full bg-gray-300 rounded-full h-4 mb-2">
                <animated.div className="bg-blue-500 rounded-full h-4" style={{ ...fadeAnimation, width: '80%' }}></animated.div>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Join Us</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We welcome passionate individuals who share our vision and values to join us in our journey. Whether you are
              interested in volunteering, becoming a donor, or collaborating with us, there are various ways you can contribute
              to our cause. Together, we can make a difference and create a more inclusive society for all.
            </p>
            <div className="flex justify-center">
              <animated.a
                href="/team"
                className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-600 transition duration-300 hover:shadow-lg"
                style={fadeAnimation}
              >
                Get Involved / Ask questions
              </animated.a>
            </div>
          </animated.div>
        </div>
      </div>
    </section>
  );
}

export default About;
