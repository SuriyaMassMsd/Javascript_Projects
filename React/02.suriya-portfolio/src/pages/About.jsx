import img from "../../public/images/image.png";
import data from "../data/data.json";

const About = () => {
  return (
    <div className="bg-[#232323] h-screen py-10 flex flex-row gap-20 ">
      <div>
        <img src={img} alt="" className="border-b-[10px] -scale-x-100" />
      </div>
      <div className="max-w-2xl px-20 py-4 space-y-4">
        <h1 className="text-3xl font-black text-[#ffbd00]">About Me</h1>
        <p className="text-gray-400 text-wrap">{data.about}</p>
        <h1 className="text-3xl font-black text-[#ffbd00]">Education</h1>
        <p className="text-gray-400 text-wrap">{data.edu}</p>

        <h1 className="text-3xl font-black text-[#ffbd00]">What Drives Me</h1>
        <p className="text-gray-400 text-wrap">{data.road}</p>
        <h1 className="text-3xl font-black text-[#ffbd00]">Lets Connect</h1>
        <p className="text-gray-400 text-wrap">{data.connect}</p>
      </div>
    </div>
  );
};

export default About;
