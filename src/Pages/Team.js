// TeamPage.js
import React from 'react';

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Transition Coordinator',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget velit vel tortor efficitur malesuada.',
      photo: 'https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg', // Replace with actual image path
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Educational Specialist',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget velit vel tortor efficitur malesuada.',
      photo: 'https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg', // Replace with actual image path
    },
    {
      id: 3,
      name: 'Emma Johnson',
      position: 'Therapist',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget velit vel tortor efficitur malesuada.',
      photo: 'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg',
    },
    {
      id: 4,
      name: 'Michael Brown',
      position: 'Psychologist',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget velit vel tortor efficitur malesuada.',
      photo: 'https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp', // Replace with actual image path
    },
    {
      id: 5,
      name: 'Sarah Lee',
      position: 'Occupational Therapist',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget velit vel tortor efficitur malesuada.',
      photo: 'https://img.freepik.com/free-photo/young-beautiful-woman-smiling-posing-purple-wall_176420-2852.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714089600&semt=ais', // Replace with actual image path
    },
    {
      id: 6,
      name: 'David Clark',
      position: 'Speech Therapist',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget velit vel tortor efficitur malesuada.',
      photo: 'https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg', // Replace with actual image path
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Meet our team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="group max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="md:flex">
              <div className="md:flex-shrink-0 relative overflow-hidden">
                <img className="h-48 w-full object-cover md:w-48 transition duration-300 ease-in-out transform group-hover:scale-110" src={member.photo} alt={member.name} />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300 ease-in-out flex justify-center items-center">
                  <p className="text-white text-sm font-semibold">Contact {member.name}</p>
                </div>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{member.position}</div>
                <h2 className="block mt-1 text-lg leading-tight font-medium text-black">{member.name}</h2>
                <p className="mt-2 text-gray-500">{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Testimonials, Values and Mission, Call-to-Action sections can be added here */}
    </div>
  );
};

export default TeamPage;
