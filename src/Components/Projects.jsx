import { Link } from 'react-router-dom';
const Projects = () => (
  <section id="Projects" className="pt-3 pb-16 relative">
    <h2 className="text-5xl font-bold mb-25 text-center bg-gradient-to-r from-[#ffa17f] to-[#00223e] bg-clip-text text-transparent">PROJECTS</h2>
    <ul className="flex flex-row flex-wrap gap-8 justify-center max-w-5xl mx-auto">
      {/* Mockup Card 1 */}
      <li className="bg-white/10 p-6 rounded-2xl w-80 flex flex-col items-start opacity-60 border-2 border-b border-amber-50">
        <span className="font-semibold text-white text-lg mb-2">Meow Match: Matching game</span>
        
          <img className=' rounded-3xl mx-auto w-3xl' src='https://wallpapercave.com/wp/wp1833274.png'>
          </img>
        <p className=" text-white mt-2 text-sm font-mono">
          Meow Match is a fun and engaging mobile puzzle game where players flip cards to find matching pairs of adorable cats. 
        </p>
      </li>
      {/* Mockup Card 2 */}
      <li className="bg-white/10 p-6 rounded-2xl w-80 flex flex-col items-start opacity-60 border-2 border-b border-b-amber-50">
        <span className="font-semibold text-blue-300 text-lg mb-2">Mockup Project</span>
        <div className="w-full h-32 bg-gradient-to-br from-blue-200 to-blue-400 rounded-xl flex items-center justify-center mb-3">
          <span className="text-white text-2xl font-bold">Coming Soon</span>
        </div>
        <p className="text-white mt-2 text-sm">This is a placeholder for a future project. Stay tuned for updates!</p>
      </li>
      {/* Mockup Card 3 */}
      <li className="bg-white/10 p-6 rounded-2xl w-80 flex flex-col items-start opacity-60 border-2 border-b border-b-amber-50">
        <span className="font-semibold text-blue-300 text-lg mb-2">Mockup Project</span>
        <div className="w-full h-32 bg-gradient-to-br from-blue-200 to-blue-400 rounded-xl flex items-center justify-center mb-3">
          <span className="text-white text-2xl font-bold">Coming Soon</span>
        </div>
        <p className="text-white mt-2 text-sm">This is a placeholder for a future project. Stay tuned for updates!</p>
      </li>
    </ul>
  </section>
);

export default Projects;