import React from 'react';
import { useSpring, animated } from 'react-spring';

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Transition Coordinator',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget velit vel tortor efficitur malesuada.',
      photo: 'https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg',
      email: 'john.doe@example.com'
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Educational Specialist',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget velit vel tortor efficitur malesuada.',
      photo: 'https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg',
      email: 'jane.smith@example.com'
    },
    {
      id: 3,
      name: 'Emma Johnson',
      position: 'Therapist',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget velit vel tortor efficitur malesuada.',
      photo: 'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg',
      email: 'emma.johnson@example.com'
    },
    {
      id: 4,
      name: 'Michael Brown',
      position: 'Psychologist',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget velit vel tortor efficitur malesuada.',
      photo: 'https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp',
      email: 'michael.brown@example.com'
    },
    {
      id: 5,
      name: 'Sarah Lee',
      position: 'Occupational Therapist',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget velit vel tortor efficitur malesuada.',
      photo: 'https://img.freepik.com/free-photo/young-beautiful-woman-smiling-posing-purple-wall_176420-2852.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714089600&semt=ais',
      email: 'sarah.lee@example.com'
    },
    {
      id: 6,
      name: 'David Clark',
      position: 'Speech Therapist',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget velit vel tortor efficitur malesuada.',
      photo: 'https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg',
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
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Meet our team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <animated.div 
            key={member.id} 
            className="group max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl transform hover:scale-105 transition duration-300 ease-in-out"
            style={cardProps}
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0 relative overflow-hidden">
                <img 
                  className="h-48 w-full object-cover md:w-48 transition duration-300 ease-in-out transform group-hover:scale-110"
                  src={member.photo}
                  alt={member.name}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex justify-center items-center">
                  <button className="text-white text-sm font-semibold px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black transition duration-300 ease-in-out"
                     onClick={() => handleContactClick(member.email)}>Contact {member.name}</button>
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
      </div>
    </div>
  );
};

export default TeamPage;
