import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white shadow-xl flex justify-between px-10 py-4">
      <div>
        <h1 className="font-semibold  text-2xl ">Blogy</h1>
      </div>
      <div>
        <ul className="flex space-x-10 items-center font-semibold font-logoFont">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => `
            ${isActive ? "text-[#ff3b1d] font-black  " : "text-black"}
            transition duration-300 ease-in-out 
            `}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) => `
            ${isActive ? "text-[#ff3b1d] font-black  " : "text-black"}
            transition duration-300 ease-in-out 
            `}
            >
              About Us
            </NavLink>
          </li>
          <li>Contact</li>
          <li>Posts</li>
          <li>
            <button
              type="button"
              className="bg-black text-white px-4 py-2 rounded"
            >
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
