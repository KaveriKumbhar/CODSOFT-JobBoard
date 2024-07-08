import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isHiring, setIsHiring] = useState(false);

  const handleMenuToggler = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Start a Search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "salary", title: "Salary" },
    { path: "/post-job", title: "Post Job" },
  ];
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        <a href="/" className="flex items-center gap-2 text-2xl text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
          >
            <circle
              cx="12.0143"
              cy="12.5143"
              r="12.0143"
              fill="#3575E2"
              fillOpacity="0.4"
            ></circle>
            <circle
              cx="16.9857"
              cy="17.4857"
              r="12.0143"
              fill="#3575E2"
            ></circle>
          </svg>
          <span>Job Board</span>
        </a>
        {/*navbar items-*/}
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }, i) => {
            if (isHiring && (i == 1 || i == 3)) {
              return (
                <li key={path} className="text-base , text-primary">
                  <NavLink
                    to={path}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {title}
                  </NavLink>
                </li>
              );
            }

            if (!isHiring && (i == 0 || i == 2)) {
              return (
                <li key={path} className="text-base , text-primary">
                  <NavLink
                    to={path}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {title}
                  </NavLink>
                </li>
              );
            }
          })}
        </ul>

        {/* Toggle for Hiring or Not */}

        <label className="flex cursor-pointer select-none items-center gap-3 tracking-wider">
          <div className="relative">
            <input
              type="checkbox"
              checked={isHiring}
              onChange={() => {
                setIsHiring(!isHiring);
              }}
              className="sr-only"
            />
            <div
              className={`box block h-8 w-14 rounded-full ${
                isHiring ? `bg-blue` : `bg-black`
              }`}
            ></div>
            <div
              className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
                isHiring ? "translate-x-full" : ""
              }`}
            ></div>
          </div>
          Hiring
        </label>

        {/* signup and login buttons */}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          <Link to="/login" className="py-2 px-5 border rounded">
            LogIn
          </Link>
          <Link
            to="/signup"
            className="py-2 px-5 border rounded bg-blue text-white"
          >
            SignUp
          </Link>
        </div>

        {/* for mobile applications */}
        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5 text-primary" />
            ) : (
              <FaBarsStaggered className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>
      </nav>

      {/* navitems for mobile application */}
      <div
        className={`px-3 flex flex-col items-center justify-center gap-3 py-5 rounded-sm ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <ul>
          {navItems.map(({ path, title }, i) => {
            if (isHiring && (i == 1 || i == 3)) {
              return (
                <li key={path} className="text-base , text-primary">
                  <NavLink
                    to={path}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {title}
                  </NavLink>
                </li>
              );
            }

            if (!isHiring && (i == 0 || i == 2)) {
              return (
                <li key={path} className="text-base , text-primary">
                  <NavLink
                    to={path}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {title}
                  </NavLink>
                </li>
              );
            }
          })}

          {/* signup and login buttons */}
          <div className="text-base text-primary mt-8 font-medium space-x-5 md:hidden block">
            <Link to="/login" className="py-2 px-5 border rounded">
              LogIn
            </Link>
            <Link
              to="/signup"
              className="py-2 px-5 border rounded bg-blue text-white"
            >
              SignUp
            </Link>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
