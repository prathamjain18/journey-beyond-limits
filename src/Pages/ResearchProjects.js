import React from 'react';
import { useSpring, animated, config, useTrail } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const ResearchProjects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const titleFadeAnimation = useSpring({ opacity: inView ? 1 : 0, from: { opacity: 0 }, config: config.slow });

  const projectsTrail = useTrail(projectsData.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(50px)',
    config: config.stiff,
    delay: 300,
  });

  return (
    <main id="main-content" className="bg-gray-100 min-h-screen" role="main">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <animated.h2 ref={ref} className="text-3xl font-bold text-center text-gray-800 mb-8" style={titleFadeAnimation} id="research-title" tabIndex="0">
          Research
        </animated.h2>
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4" tabIndex="0">Empowering Newcomers for Recreation Leadership Project</h3>
          <p className="text-gray-600 mb-4">
            Improving everyday lives
          </p>
          <p className="text-gray-600">
            As one of Canada's leading research universities, Dalhousie attracts millions in research grants and awards annually. The School of Occupational Therapy is one of 8 schools and colleges in the Faculty of Health. Please see our faculty listing for current research interests.
          </p>
          <p className="text-gray-600 mt-4">
            If you are applying for our Master of Science - Occupational Science research thesis stream, please connect with the faculty member(s) who may be best suited to supervise you as you pursue your research interests. <a href="https://www.dal.ca/faculty/health/occupational-therapy/faculty-staff/faculty.html" className="text-blue-500 underline focus:outline focus:ring-2 focus:ring-blue-700" tabIndex="0">See profiles here</a>.
          </p>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-labelledby="research-title">
          {/* Research Project Cards */}
          {projectsData.map((project, index) => (
            <ProjectCard key={index} index={index} project={project} animationProps={projectsTrail[index]} />
          ))}
        </section>
      </div>
    </main>
  );
};

const ProjectCard = ({ index, project, animationProps }) => {
  return (
    <animated.div
      className="project-card bg-white rounded-lg shadow-md p-8 transition-all duration-500 ease-in-out hover:scale-105 hover:bg-blue-100 focus-within:ring-2 focus-within:ring-blue-700"
      style={animationProps}
      tabIndex="0"
      role="region"
      aria-label={project.title}
    >
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h3>
      <p className="text-gray-600">{project.description}</p>
    </animated.div>
  );
};

const projectsData = [
  {
    title: 'Adolescent Development Study',
    description: 'This project explores the psychological and social factors influencing adolescent development, aiming to provide insights for better youth support programs.',
  },
  {
    title: 'Life Skills Acquisition Research',
    description: 'Investigating effective methods for teaching essential life skills to young adults, this study focuses on practical workshops and activities.',
  },
  {
    title: 'Community Involvement Analysis',
    description: 'Analyzing the impact of community engagement on individual well-being and social inclusion, this project seeks to foster a sense of belonging.',
  },
  {
    title: 'Interpersonal Skills Development',
    description: 'Examining strategies to improve communication, relationship-building, and social interactions through structured activities and group discussions.',
  },
  {
    title: 'Therapeutic Recreation Impact Study',
    description: 'This research evaluates the benefits of recreational therapy on physical, emotional, and social well-being, providing data for program improvement.',
  },
  {
    title: 'Parenting Support Program Evaluation',
    description: 'Assessing the effectiveness of resources, workshops, and support groups aimed at empowering parents and caregivers of individuals with disabilities.',
  },
];

export default ResearchProjects;
