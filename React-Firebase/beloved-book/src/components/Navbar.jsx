import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="bg-[#bb0884] flex justify-between items-center  px-10 py-4">
        <div className="flex gap-1 items-center">
          <h1 className="text-2xl font-titlefont  text-white font-semibold ">
            Add Beloved Book
          </h1>
          <img
            width="28"
            height="28"
            src="https://img.icons8.com/arcade/100/book.png"
            alt="book"
          />
        </div>
        <div>
          <ul className="flex items-center font-bold gap-10">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => `
              ${isActive ? "text-[#fbff1b]  font-black  " : "text-white"}
              
              cursor-pointer hover:text-[#ffbd00] 
              `}
              >
                Add Book
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/books"}
                className={({ isActive }) => `
              ${isActive ? "text-[#fbff1b]  font-black  " : "text-white"}
              
              cursor-pointer hover:text-[#ffbd00] 
              `}
              >
                Books
              </NavLink>
            </li>
            <li>
              <button className="px-4 py-2 bg-white rounded font-semibold">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
