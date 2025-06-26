import React from 'react';
import { useSpring, animated } from 'react-spring';

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Transition Coordinator',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget velit vel tortor efficitur malesuada.',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      email: 'john.doe@example.com'
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Educational Specialist',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget velit vel tortor efficitur malesuada.',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      email: 'jane.smith@example.com'
    },
    {
      id: 3,
      name: 'Emma Johnson',
      position: 'Therapist',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget velit vel tortor efficitur malesuada.',
      photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      email: 'emma.johnson@example.com'
    },
    {
      id: 4,
      name: 'Michael Brown',
      position: 'Psychologist',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget velit vel tortor efficitur malesuada.',
      photo: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      email: 'michael.brown@example.com'
    },
    {
      id: 5,
      name: 'Sarah Lee',
      position: 'Occupational Therapist',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget velit vel tortor efficitur malesuada.',
      photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      email: 'sarah.lee@example.com'
    },
    {
      id: 6,
      name: 'David Clark',
      position: 'Speech Therapist',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget velit vel tortor efficitur malesuada.',
      photo: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      email: 'david.clark@example.com'
    },
  ];
  const handleContactClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const cardProps = useSpring({ 
    from: { opacity: 0, transform: 'translate3d(0, -50px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { mass: 1, tension: 170, friction: 26 }
  });

  return (
    <main id="main-content" className="container mx-auto px-4 py-8" role="main">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8" tabIndex="0" id="team-title">Meet our team</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-labelledby="team-title">
        {teamMembers.map((member) => (
          <animated.div 
            key={member.id} 
            className="group max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl transform hover:scale-105 transition duration-300 ease-in-out focus-within:ring-2 focus-within:ring-blue-700"
            style={cardProps}
            tabIndex="0"
            role="region"
            aria-label={member.name + ', ' + member.position}
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0 relative overflow-hidden">
                <img 
                  className="h-48 w-full object-cover md:w-48 transition duration-300 ease-in-out transform group-hover:scale-110"
                  src={member.photo}
                  alt={member.name + ', ' + member.position}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex justify-center items-center">
                  <button className="text-white text-sm font-semibold px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black transition duration-300 ease-in-out focus:outline focus:ring-2 focus:ring-blue-700"
                     onClick={() => handleContactClick(member.email)} aria-label={`Contact ${member.name}`}>Contact {member.name}</button>
                </div>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{member.position}</div>
                <h2 className="block mt-1 text-lg leading-tight font-medium text-black">{member.name}</h2>
                <p className="mt-2 text-gray-500">{member.bio}</p>
              </div>
            </div>
          </animated.div>
        ))}
      </section>
    </main>
  );
};

export default TeamPage;
