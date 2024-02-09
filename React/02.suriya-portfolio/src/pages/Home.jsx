// import Image from "../../public/images/image.png";
import data from "../data/data.json";

const Home = () => {
  return (
    <div className="bg-[#232323] flex justify-center gap-20 items-center w-full h-screen pb-20 pt-20">
      <div className="px-10 space-y-4 max-w-lg">
        <sapn className="text-white font-semibold">Hello</sapn>
        <h1 className="text-7xl font-black text-[#ffbd00]">I am {data.name}</h1>
        <div className="w-[270px] capitalize text-xl font-semibold bg-gray-400 px-4 py-2 rounded-lg ">
          {data.work}
        </div>
        <p className="text-gray-400 font-ubuntu">{data.desc}</p>
        <button className="px-4 py-1.5 rounded font-semibold  hover:bg-[#dfa300] bg-[#ffbd00]">
          Hire Me
        </button>
      </div>

      <div className="px-10 flex mt-24 ml-30">
        <img
          src={data.img}
          alt="image"
          className="object-cover ring-4 ring-gray-500 w-[500px] rounded-full   -rotate-[15deg]   z-10 -mt-20"
        />
      </div>
    </div>
  );
};

export default Home;
