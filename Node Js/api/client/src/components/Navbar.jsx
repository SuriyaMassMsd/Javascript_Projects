import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="bg-indigo-700 px-10  py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28px"
            height="28px"
            viewBox="0 0 512 512"
          >
            <path
              d="M337.454 232c33.599 0 61.092-27.002 61.092-60 0-32.997-27.493-60-61.092-60s-61.09 27.003-61.09 60c0 32.998 27.491 60 61.09 60zm-162.908 0c33.599 0 61.09-27.002 61.09-60 0-32.997-27.491-60-61.09-60s-61.092 27.003-61.092 60c0 32.998 27.493 60 61.092 60zm0 44C126.688 276 32 298.998 32 346v54h288v-54c0-47.002-97.599-70-145.454-70zm162.908 11.003c-6.105 0-10.325 0-17.454.997 23.426 17.002 32 28 32 58v54h128v-54c0-47.002-94.688-58.997-142.546-58.997z"
              fill="currentColor"
            ></path>
          </svg>
          <h1 className="text-white   text-xl font-semibold">
            Interns Profile
          </h1>
        </div>
        <ul className="flex text-black gap-6 font-semibold">
          <li className="cursor-pointer">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-black"
              }
            >
              Profiles
            </NavLink>
          </li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
