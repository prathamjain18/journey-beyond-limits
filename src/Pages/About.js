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
    <section id="main-content" className="bg-gray-100 py-16" aria-labelledby="about-title">
      <div className="container mx-auto px-4">
        <animated.h2 id="about-title" className="text-3xl font-bold text-center text-gray-800 mb-8" style={fadeAnimation} tabIndex="0">
          About Us
        </animated.h2>
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="md:w-1/3">
            <animated.img
              src="https://www.shutterstock.com/image-photo/cute-little-girl-painted-hand-600nw-281359508.jpg"
              alt="Smiling young girl with painted hand, representing creativity and joy."
              className="rounded-lg shadow-lg w-full mb-4"
              style={{ ...parallaxImage, ...fadeAnimation }}
            />
            <animated.img
              src="https://images.unsplash.com/photo-1464998857633-50e59fbf2fe6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Children playing outdoors, symbolizing inclusion and fun."
              className="rounded-lg shadow-lg w-full mb-4"
              style={{ ...parallaxImage, ...fadeAnimation }}
            />
            <animated.img
              src="https://www.shutterstock.com/shutterstock/photos/1433398475/display_1500/stock-photo-disabled-child-on-wheelchair-and-his-dad-standing-on-the-green-bridge-in-city-park-of-thailand-1433398475.jpg"
              alt="Child in wheelchair with supportive adult, showing accessibility and support."
              className="rounded-lg shadow-lg w-full mb-4"
              style={{ ...parallaxImage, ...fadeAnimation }}
            />
            <animated.img
              src="https://images.unsplash.com/photo-1536825919521-ab78da56193b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Group of friends smiling together, representing community and belonging."
              className="rounded-lg shadow-lg w-full mb-4"
              style={{ ...parallaxImage, ...fadeAnimation }}
            />
          </div>
          <animated.div className="md:w-1/2 mt-8 md:mt-0" style={slideAnimation}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4" tabIndex="0">Our Mission</h3>
            <p className="bg-white p-8 text-lg rounded-lg shadow-lg mb-8">
              At Journey Beyond Limits, our mission is to provide comprehensive services and support to disabled children
              as they transition into adulthood. We strive to empower each individual to reach their full potential and lead
              fulfilling lives.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4" tabIndex="0">Who We Are</h3>
            <p className="bg-white p-8 text-lg rounded-lg shadow-lg mb-8">
              We are a dedicated team of professionals including educators, therapists, social workers, and advocates who are
              passionate about making a positive difference in the lives of disabled children and their families. With years
              of experience and expertise, we are committed to offering personalized services tailored to meet the unique
              needs of each individual.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4" tabIndex="0">Our Values</h3>
            <ul className="list-disc text-gray-700 pl-6 mb-6" aria-label="Our Values">
              <li className="bg-white p-8 rounded-lg shadow-lg mb-1 text-lg">Compassion</li>
              <li className="bg-white p-8 rounded-lg shadow-lg mb-1 text-lg">Inclusivity</li>
              <li className="bg-white p-8 rounded-lg shadow-lg mb-1 text-lg">Empowerment</li>
              <li className="bg-white p-8 rounded-lg shadow-lg mb-1 text-lg">Collaboration</li>
              <li className="bg-white p-8 rounded-lg shadow-lg mb-1 text-lg">Respect</li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4" tabIndex="0">Join Us</h3>
            <p className="bg-white p-8 rounded-lg shadow-lg mb-8 text-lg">
              We welcome passionate individuals who share our vision and values to join us in our journey. Whether you are
              interested in volunteering, becoming a volunteer, or collaborating with us, there are various ways you can contribute
              to our cause. Together, we can make a difference and create a more inclusive society for all.
            </p>
            <div className="flex justify-center">
              <animated.a
                href="/team"
                className="bg-blue-500 text-white py-2 px-6 rounded-full text-2xl hover:bg-blue-600 transition duration-300 hover:shadow-lg focus:outline focus:ring-2 focus:ring-blue-700"
                style={fadeAnimation}
                tabIndex="0"
                aria-label="Get Involved or Ask questions"
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
