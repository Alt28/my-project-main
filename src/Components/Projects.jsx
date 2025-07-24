import { title } from 'framer-motion/client';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Meow Match: Matching game',
    description: 'Meow Match is a fun and engaging mobile puzzle game where players flip cards to find matching pairs of adorable cats.',
    image: 'https://wallpapercave.com/wp/wp1833274.png',
    link: '/meow-match'
  },

  {
    title: 'Mockup Project 1',
    description: 'This is a placeholder for a future project. Stay tuned for updates!',
    image: 'https://via.placeholder.com/300',
    link: '/mockup-project-1'
  },

  {
    title: 'Mockup Project 2',
    description: 'This is a placeholder for a future project. Stay tuned for updates!',
    image: 'https://via.placeholder.com/300',
    link: '/mockup-project-2'
  },
  {
    title: 'Mockup Project 3',
    description: 'This is a placeholder for a future project. Stay tuned for updates!',
    image: 'https://via.placeholder.com/300',
    link: '/mockup-project-3'
  },
  {
    title: 'Mockup Project 4',
    description: 'This is a placeholder for a future project. Stay tuned for updates!',
    image: 'https://via.placeholder.com/300',
    link: '/mockup-project-4'
  },
  {
    title: 'Mockup Project 5',
    description: 'This is a placeholder for a future project. Stay tuned for updates!',
    image: 'https://via.placeholder.com/300',
    link: '/mockup-project-5'
  }
]

const Projects = () => (
  <section id="Projects" className="pt-3 pb-16 relative">
    <h2 className="text-5xl font-bold mb-25 text-center bg-gradient-to-r from-[#ffa17f] to-[#00223e] bg-clip-text text-transparent">PROJECTS</h2>
    <ul className="flex flex-row flex-wrap gap-8 justify-center max-w-5xl mx-auto">

      {projects.map((project, index) => {
        return (
          <li key={index} className="bg-white/10 p-6 rounded-2xl w-80 flex flex-col items-start opacity-60 border-2 border-b border-amber-50">
            <span className="font-semibold text-white text-lg mb-2">{project.title}</span>
            <Link to={project.link}>
              <img className='rounded-3xl mx-auto w-full h-48 object-cover' src={project.image} alt={project.title} />
            </Link>
            <p className="text-white mt-2 text-sm font-mono">{project.description}</p>
          </li>
        );
      })}
    </ul>
  </section>
);

export default Projects;