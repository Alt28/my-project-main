import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <main className="flex flex-col text-center gap-5">
      <img className=" drop-shadow-lg drop-shadow-gray-600 mx-auto w-[250px] rounded-full mt-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFFHWoy3e3CRaEhJqJOJKp7Xj6v9gxCo7PDQ&s" alt="mukha ko" />
      <div className="flex flex-col gap-5">
        <h1 className=" font-bold text-6xl font- bg-gradient-to-r from-[#2c3e50] to-[#bdc3c7] bg-clip-text text-transparent">I'm Clarence</h1>
        <p>I'm a Computer Science Student with a passion for coding, making games, and UI/UX Designing.</p>
      </div>
      <Link
        to="/projects"
        className="py-2 w-60 rounded-2xl bg-amber-800 mx-auto flex items-center justify-center hover:bg-amber-700 transition"
      >
        See Projects
      </Link>
    </main>
  );
}

export default Homepage;