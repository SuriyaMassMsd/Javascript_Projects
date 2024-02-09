import { Link } from "react-router-dom";
import recentImg from "../../public/images/recent 1 .jpg";
import CartBox from "../components/Cart";

// import kanguva from "../../public/images/Kanguva.jpg";

function Home() {
  return (
    <div className="mb-10  flex flex-col sm:flex-row md:flex-row gap-16">
      <div className="flex  items-start gap-10 ">
        <CartBox />
      </div>
      <div className="relative flex flex-col justify-start mt-3 space-y-4 max-w-lg">
        <div className="bg-white rounded-lg p-4">
          <h1 className="text-lg  font-semibold ">Search</h1>
          <div>
            <input
              className="px-4 py-2 border  border-gray-400 rounded-lg focus:outline-none w-96 text-black bg-white "
              type="text"
              name="search"
              id="search"
              placeholder="Type Here"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 256 256"
              className="absolute top-14 right-20 sm:right-8"
            >
              <path
                fill="#888888"
                d="M232.49 215.51L185 168a92.12 92.12 0 1 0-17 17l47.53 47.54a12 12 0 0 0 17-17ZM44 112a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68"
              />
            </svg>
          </div>
        </div>
        <div className="bg-white mt-4 shadow-xl rounded-lg flex flex-col pb-4  space-y-2 ">
          <h1 className="text-black font-semibold px-3 py-2">Categories</h1>
          <span className="cate">Cinema (3)</span>
          <span className="cate">Sports (10)</span>
          <span className="cate">Technology (1)</span>
          <span className="cate">UI/UX Design(2)</span>
          <span className="cate">Development (3)</span>
          <span className="cate">Cyber Security (12)</span>
        </div>
        <div className="bg-white relative rounded-lg shadow-lg p-4 pb-10 space-y-3 w-[420px] ">
          <h1 className="font-semibold">Recent Post</h1>

          <div className="flex space-x-2 items-center">
            <img
              src={recentImg}
              alt="recet"
              className="w-20 h-20 object-cover"
            />
            <span className=" ">
              Tamil Nadu's timeless bull-taming tradition
            </span>
          </div>
          <div className="flex space-x-2 items-center">
            <img
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202304/kanguva-one_one.jpg?VersionId=O4.ooQq5XHnDEyv1lsCBOiH6o8w_KpJ_"
              alt="recet"
              className="w-20 h-20 object-cover"
            />
            <span className=" ">Kangva team releases new poster</span>
          </div>
          <Link
            to={"/blogs"}
            className="text-sm absolute font-bold hover:underline hover:underline-offset-8 right-4  decoration-2 hover:text-[#ff3b1d] decoration-[#ff3b1d] hover:cursor-pointer"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
