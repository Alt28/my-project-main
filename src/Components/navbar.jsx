import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top bar */}
      <nav className="bg-White text-white px-4 py-4 flex justify-between items-center font-mono">
  <button
    className="focus:outline-none"
    onClick={() => setDrawerOpen(true)}
    aria-label="Open navigation drawer"
  >
    {/* Hamburger icon */}
    <svg className=" hover:text-blue-300 transition w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        </button>
    </nav>
      {/* Drawer overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-opacity-20 z-40"
          onClick={() => setDrawerOpen(false)}
          style={{ zIndex: 40 }}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white font-mono z-50 transform ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-400 ease-in-out`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
          <span className="text-2xl font-bold">Menu</span>
          <button
            className=" hover:text-blue-300 transition focus:outline-none"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close navigation drawer"
          >
            {/* Close icon */}
            <svg className=" w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
       <ul className="flex flex-col space-y-6 mt-8 px-6">
          <li>
            <Link to="/About" className="hover:text-blue-300 transition" onClick={() => setDrawerOpen(false)}>
              ABOUT ME
            </Link>
          </li>
           {(location.pathname === "/projects" || location.pathname === "/About") &&  (
          <li>
            <Link to="/" className="hover:text-blue-300 transition" onClick={() => setDrawerOpen(false)}>
              HOME
            </Link>
          </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;