import { NavLink } from "react-router-dom";

NavLink;

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-3 bg-[#232323] font-ubuntu">
      <h1 className="text-white font-semibold text-xl first-letter:text-3xl ">
        <span className="text-[#ffbd00]">Suriya</span> Portfolio
      </h1>
      <ul className="flex  space-x-8 items-center text-white font-semibold text-[16px] ">
        <li className="">
          <NavLink
            to={"/"}
            className={({ isActive }) => `
            ${
              isActive
                ? "text-[#ffbd00] underline font-black  underline-offset-[21px]  decoration-[3px] "
                : "text-white"
            }
            transition duration-300 ease-in-out
            cursor-pointer hover:text-[#ffbd00] hover:text-2xl hover:transition hover:ease-in-out hover:duration-500
            `}
          >
            Home{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) => `
            ${
              isActive
                ? "text-[#ffbd00] underline font-black  underline-offset-[21px]  decoration-[3px] "
                : "text-white"
            }
            transition duration-300 ease-in-out
            cursor-pointer hover:text-[#ffbd00] hover:text-2xl hover:transition hover:ease-in-out hover:duration-500
            `}
          >
            About
          </NavLink>
        </li>
        <li className="cursor-pointer hover:text-[#ffbd00] hover:text-2xl hover:transition hover:ease-in-out hover:duration-500">
          <NavLink
            to={"/contact"}
            className={({ isActive }) => `
            ${
              isActive
                ? "text-[#ffbd00] underline font-black  underline-offset-[21px]  decoration-[3px]"
                : "text-white"
            }
            transition duration-300 ease-in-out
            cursor-pointer hover:text-[#ffbd00] hover:text-2xl hover:transition hover:ease-in-out hover:duration-500
            `}
          >
            Contact
          </NavLink>
        </li>
        <li className="cursor-pointer hover:text-[#ffbd00] hover:text-2xl hover:transition hover:ease-in-out hover:duration-500">
          <NavLink
            to={"/skills"}
            className={({ isActive }) => `
            ${
              isActive
                ? "text-[#ffbd00] underline font-black  underline-offset-[21px]  decoration-[3px]"
                : "text-white"
            }
            transition duration-300 ease-in-out
            cursor-pointer hover:text-[#ffbd00] hover:text-2xl hover:transition hover:ease-in-out hover:duration-500
            `}
          >
            Skills
          </NavLink>
        </li>
        <li className="flex bg-white text-black px-4 py-1 rounded items-center gap-2 cursor-pointer hover:bg-gray-600">
          <button>Download </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
