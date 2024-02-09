import { Link } from "react-router-dom";
import data from "../assets/data/data.jsx";

function Posts() {
  // const data = [
  //   {
  //     id: 1,
  //     img: { caro },
  //     username: "Ithaada Cinema",
  //     viwes: "123k",
  //     title: "Lal Salam Movie Audio Launch",
  //   },
  //   {
  //     id: 2,
  //     img: { caro },
  //     username: "Ithaada Cinema",
  //     viwes: "123k",
  //     title: "suriya",
  //   },
  //   {
  //     id: 3,
  //     img: { caro },
  //     username: "Ithaada Cinema",
  //     viwes: "123k",
  //     title: "Lal Salam Movie Audio Launch",
  //   },
  // ];
  const card = data.map((data) => {
    return (
      <div key={data.id}>
        <div className="max-w-sm mx-auto sm:ml-0 md:ml-0 mt-2 mb-14">
          <img
            src={data.img}
            alt="soori"
            className="object-cover w-96 h-44  rounded-lg"
          />
          <div className="flex justify-between mt-2">
            <div className="flex items-center gap-2">
              <img
                src={data.logo}
                alt="logo"
                className="w-8 h-8 rounded-full"
              />
              <h1 className="font-semibold text-[#830000] cursor-pointer hover:text-[#c80000]">
                {data.username}
              </h1>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-semibold text-gray-700">
                {data.viwes}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 48 48"
                className=" fill-current"
              >
                <g fill="cuurent">
                  <path
                    d="M29 24.048a5 5 0 1 1-1.748-3.798a1.5 1.5 0 1 0 .547.547A4.98 4.98 0 0 1 29 24.046z"
                    fill="#556581"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M44 24.048s-11-12-19.947-12c-8.948 0-20.053 12-20.053 12s11.105 12 20.053 12c8.947 0 19.947-12 19.947-12zM7.255 23.62c-.158.15-.306.292-.444.427a59.368 59.368 0 0 0 5.08 4.416a43.151 43.151 0 0 0 3.518 2.455A10.954 10.954 0 0 1 13 24.048c0-2.6.902-4.988 2.41-6.87a43.176 43.176 0 0 0-3.518 2.454a59.368 59.368 0 0 0-4.637 3.989zm28.9 4.846a42.227 42.227 0 0 1-3.64 2.546A10.955 10.955 0 0 0 35 24.048c0-2.643-.932-5.068-2.485-6.965a42.227 42.227 0 0 1 3.64 2.545a58.582 58.582 0 0 1 5.047 4.42l-.446.433a58.582 58.582 0 0 1-4.6 3.986zM24 33.047a9 9 0 1 0 0-18a9 9 0 0 0 0 18z"
                    fill="#556581"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="my-2">
            <Link
              to={`/blogsview/${data.id}`}
              className="font-semibold mt-2 text-wrap hover:text-blue-700 cursor-pointer "
            >
              {data.title}
            </Link>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <h1 className="font-semibold text-2xl">Recent Posts</h1>
      {card}
    </div>
  );
}

export default Posts;
