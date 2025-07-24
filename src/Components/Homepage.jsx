import { Link } from 'react-router-dom';

function Homepage() {
  return (
      <main className="flex flex-col gap-8 items-start w-full pl-60">
      <h1 className="font-bold text-6xl bg-gradient-to-r from-[#2c3e50] to-[#bdc3c7] bg-clip-text text-transparent mt-8">I'm Clarence</h1>
      <div className="flex flex-row justify-between items-center w-full max-w-4xl gap-8">
        <div className="flex flex-col gap-5 flex-1 items-start ml-0">
          <p class="mb-3 font-normal leading-relaxed">
            I am a Computer Science student with a deep passion for coding, game development, and UI/UX design. I enjoy bringing ideas to life through interactive experiences, whether it’s building a fully functional web app, designing intuitive interfaces, or developing immersive games. 
            <p class="mb-3 font-normal leading-relaxed">
              My technical skills include proficiency in languages such as Python, JavaScript, and C#, and I’ve worked on several projects involving web development using React.js, Node.js, and the MERN stack. I'm also skilled in game engines like Unity and enjoy creating 2D and prototype games as a creative outlet.</p>
            </p>
          <Link
            to="/projects"
            className="py-2 w-60 rounded-2xl bg-amber-800 flex items-center justify-center hover:bg-amber-700 transition text-xl" 
          >
            See Projects
          </Link>
        </div>
        <div className="flex flex-col gap-5 flex-1 items-start self-start">
          <img className="drop-shadow-lg drop-shadow-gray-600 w-[350px] rounded-full flex-1 ml-80 -mt-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFFHWoy3e3CRaEhJqJOJKp7Xj6v9gxCo7PDQ&s" alt="mukha ko" />
        </div>
      </div>
      </main>
  );
}

export default Homepage;