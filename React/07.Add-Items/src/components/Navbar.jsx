import React from "react";
import InputItems from "./InputItems";

const Navbar = () => {
  return (
    <div>
      <div className="bg-indigo-700 px-10 py-4 flex justify-between">
        <h1 className="text-2xl font-semibold capitalize text-white ">
          time scheme
        </h1>
        <ul className="flex items-center font-bold space-x-10 text-white ">
          <li className="hover:text-gray-300 cursor-pointer">Add Items</li>
          <li className="hover:text-gray-300 cursor-pointer">FAQ</li>
          <li className="hover:bg-gray-300 hover:cursor-pointer bg-white text-black px-4 py-2 rounded  font-bold">
            Sign Up
          </li>
        </ul>
      </div>
      <InputItems />
    </div>
  );
};

export default Navbar;
