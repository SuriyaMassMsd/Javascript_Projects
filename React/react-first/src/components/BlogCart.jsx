// import CartImg from "../../public/images/money.jpg";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import profile from "../../public/images/profile/proo.jpg";

function BlogCart() {
  return (
    <div className="mt-4 mx-auto md:ml-14 mb-10 shadow-2xl max-w-sm sm:max-w-xl ">
      <div className=" bg-white rounded-t-lg">
        <div className="">
          <Carousel />
        </div>
        <div className="p-4 space-y-2">
          <Link to={"/"} className="capitalize font-semibold font-cartFont  ">
            Kollywood
          </Link>
          <span className="text-gray-400 text-[14px]  px-4 ">
            Published on: 27 Jan 2024, 10:47 am
          </span>

          <div className="space-y-2 gap-y-4">
            <h1 className="text-2xl  font-card italic font-black ">
              A Grand Celebration of Lal Salaam Audio Launch Event
            </h1>
            <p className="text-md">
              Step into the glitz and glamour of the Lal Salaam Audio Launch
              Event, a grand celebration uniting music aficionados and cinema
              enthusiasts. From soul-stirring melodies to star-studded moments,
              this night promises an unforgettable fusion of entertainment and
              euphoria
            </p>
            <span className="text-blue-700  lowercase ">
              #LalSalaam #Rajini #Lyca
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2 px-4">
          <img
            src={profile}
            alt="profile"
            className="w-11 h-11 object-cover rounded-full"
          />
          <h1 className="font-semibold hover:text-blue-800 cursor-pointer hover:underline  ">
            Unknown_Me_oo7
          </h1>
        </div>

        <div className="flex items-center justify-between p-6 pt-o">
          <span className="text-sm font-bold hover:underline hover:underline-offset-8 decoration-2 decoration-[#ff3b1d] hover:cursor-pointer">
            Read More
          </span>
          <ul className="flex space-x-4 bg-white">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="cursor-pointer hover:text-[#ff3b1d] fill-current"
              >
                <path d="M21.3 10.08A3 3 0 0 0 19 9h-4.56L15 7.57A4.13 4.13 0 0 0 11.11 2a1 1 0 0 0-.91.59L7.35 9H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12.73a3 3 0 0 0 2.95-2.46l1.27-7a3 3 0 0 0-.65-2.46M7 20H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2Zm13-7.82l-1.27 7a1 1 0 0 1-1 .82H9v-9.79l2.72-6.12a2.11 2.11 0 0 1 1.38 2.78l-.53 1.43a2 2 0 0 0 1.87 2.7H19a1 1 0 0 1 .77.36a1 1 0 0 1 .23.82" />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-black cursor-pointer hover:text-[#ff3b1d] "
              >
                <path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14H6.667L4 18V4h16z" />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="cursor-pointer hover:text-[#ff3b1d] fill-current  hover:stroke-[#ff3b1d]"
              >
                <path
                  stroke="#000000 "
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m12-6a3 3 0 1 0 6 0a3 3 0 1 0-6 0m0 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-6.3-7.3l6.6-3.4m-6.6 6l6.6 3.4"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BlogCart;
