import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className=" my-20">
      <h1 className="text-2xl flex justify-center items-center ">
        Page Not Found{" "}
        <Link
          to={"/"}
          className="cursor-pointer text-blue-700 hover:underline ml-4"
        >
          Back to Home
        </Link>
      </h1>
    </div>
  );
};

export default Error;
