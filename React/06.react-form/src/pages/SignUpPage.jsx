import image from "../../public/bgImage.jpg";
import SignUp from "../components/SignUp";
import { useState } from "react";

const SignUpPage = () => {
  const [datas, setData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  function collectInput(e) {
    const { name, value } = e.target;
    setData((pre) => ({
      ...pre,
      [name]: value,
    }));
  }

  function submitForm(e) {
    e.preventDefault();

    console.log(datas);
  }
  return (
    <div>
      <img
        src={image}
        alt=""
        className="relative h-screen object-cover w-full"
      />

      <div className="absolute top-0 bg-white max-w-3xl w-full ml-72 mt-20 shadow-2xl  grid grid-cols-2">
        <div className="bg-gradient-to-b from-fuchsia-600 to-blue-700 h-[500px]">
          <div className=" flex flex-col justify-center gap-y-6 mt-10 p-10 items-center">
            <img
              src="data:image/jpeg;base64,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"
              className="w-40 h-40 rounded-full  object-cover"
            />
            <h1 className="text-5xl bg-gray-400 p-4 text-center font-semibold  rounded">
              Sign Up
            </h1>
          </div>
        </div>
        <form className="p-10 space-y-8 " onSubmit={submitForm}>
          <SignUp
            label="Name"
            name="fullName"
            placeholder="Enter your name"
            required
            type="text"
            handleChange={collectInput}
            value={datas.fullName}
          />
          <SignUp
            label="Email"
            name="email"
            placeholder="Enter your email"
            required
            type="email"
            handleChange={collectInput}
            value={datas.email}
          />
          <SignUp
            label="Password"
            name="password"
            placeholder="Enter your password"
            required
            type="password"
            handleChange={collectInput}
            value={datas.password}
          />

          <button className="bg-green-500 font-semibold text-white  px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
