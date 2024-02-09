import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#1b263b] font-poppins flex justify-between items-center p-5 text-white">
      <h1>Components</h1>
      <div>
        <ul className="flex items-center space-x-10">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "text-red-500 " : "text-white"}`
              }
            >
              Alerts
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/button"}
              className={({ isActive }) =>
                `${isActive ? "text-red-500" : "text-white"}`
              }
            >
              Buttons
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/cards"}
              className={({ isActive }) =>
                `${isActive ? "text-red-500" : "text-white"}`
              }
            >
              Cards
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
