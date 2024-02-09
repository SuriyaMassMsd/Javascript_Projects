import { useState } from "react";

const Chat = () => {
  const [value, setText] = useState({
    time: "2:00 pm",
    net: "4G",
    name: "Queen",
    status: "Online",
    messageFrom: "hello",
    messageTo: "hai",
  });

  function chageValue(e) {
    const valueText = e.target.value;
    setText({ ...value, [e.target.name]: valueText });
  }

  return (
    <div className="grid grid-cols-2 px-4  max-w-3xl  mx-auto bg-indigo-500 shadow-2xl rounded-lg ">
      <div className="max-w-sm p-10 ">
        <form className="flex flex-col space-y-2 font-semibold  text-zinc-950 ">
          <label htmlFor="time">Time</label>
          <input
            id="time"
            type="text"
            placeholder="Enter your time"
            name="time"
            className="px-4 py-1 bg-gray-200 rounded outline-none"
            onChange={chageValue}
          />
          <label htmlFor="net">Network</label>
          <input
            id="net"
            type="text"
            placeholder="choose your network"
            name="net"
            className="px-4 py-1 bg-gray-200 rounded outline-none "
            onChange={chageValue}
          />
          <label htmlFor="time">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            name="name"
            className="px-4 py-1 bg-gray-200 rounded  outline-none"
            onChange={chageValue}
          />
          <label htmlFor="status">Status</label>
          <input
            id="status"
            type="text"
            placeholder="Enter your name"
            name="status"
            className="px-4 py-1 bg-gray-200 rounded outline-none "
            onChange={chageValue}
          />
          <label htmlFor="message-from">Message From </label>
          <input
            id="message-from"
            type="text"
            placeholder="Enter your message from"
            name="messageFrom"
            className="px-4 py-1 bg-gray-200 rounded outline-none "
            onChange={chageValue}
          />
          <label htmlFor="message-to">Message To </label>
          <input
            id="message-to"
            type="text"
            placeholder="Enter your message to"
            name="messageTo"
            className="px-4 py-1 bg-gray-200 rounded outline-none "
            onChange={chageValue}
          />
        </form>
      </div>
      <div className="max-w-[280px]   rounded-xl  h-[500px] bg-gray-200 p-2 m-4 mt-10">
        <div className="bg-white max-w-[270px] rounded-[15px] h-[485px] ">
          {/* <img src={Img}  alt="logo" className=" ring-2  shadow-lg "/> */}
          <div className="bg-gray-50 max-[270px] h-[90px] rounded-t-[15px] shadow-sm  ">
            <span className="text-[10px] font-semibold absolute top-[159px] px-4   font-fontPhone">
              {value.time}
            </span>
            <div className="-ml-6">
              <div className="flex flex-col">
                <span className="absolute text-[9px] font-black  top-[159px] ml-[210px] font-fontPhone">
                  {value.net}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  className="top-[159px] ml-[220px] absolute"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M3 21L21 3v18zm11.288-1H20V5.427l-5.712 5.711z"
                  />
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                className="top-[159px] absolute ml-[240px]"
                height="15"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 21q-1.05 0-1.775-.725T9.5 18.5q0-1.05.725-1.775T12 16q1.05 0 1.775.725T14.5 18.5q0 1.05-.725 1.775T12 21m0-11q1.875 0 3.563.6t3.062 1.65q.5.375.513.988T18.7 14.3q-.425.425-1.05.438t-1.125-.338q-.95-.65-2.1-1.025T12 13q-1.275 0-2.425.375t-2.1 1.025q-.5.35-1.125.325t-1.05-.45q-.425-.45-.425-1.062t.5-.988q1.375-1.05 3.063-1.638T12 10m0-6q3.125 0 5.888 1.025t4.962 2.9q.5.425.525 1.05t-.425 1.075q-.425.425-1.05.438t-1.125-.388q-1.8-1.475-4.037-2.287T12 7q-2.5 0-4.737.813T3.225 10.1q-.5.4-1.125.388t-1.05-.438Q.6 9.6.625 8.975t.525-1.05q2.2-1.875 4.963-2.9T12 4"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                className="top-[159px] absolute ml-[260px]"
                height="16"
                viewBox="0 0 512 512"
              >
                <rect
                  width="400"
                  height="224"
                  x="32"
                  y="144"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="square"
                  stroke-miterlimit="10"
                  stroke-width="32"
                  rx="45.7"
                  ry="45.7"
                />
                <rect
                  width="292.63"
                  height="114.14"
                  x="85.69"
                  y="198.93"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="square"
                  stroke-miterlimit="10"
                  stroke-width="32"
                  rx="4"
                  ry="4"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="32"
                  d="M480 218.67v74.66"
                />
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              className="mt-14 ml-4 fill-current text-gray-400 cursor-pointer hover:text-gray-600 "
              viewBox="0 0 56 56"
            >
              <path
                fill="currentColor"
                d="M42.168 43.563c1.148 0 1.992-.82 1.992-2.11c0-1.078-.562-1.687-1.547-2.156L17.371 28.07v-.258L42.613 16.68c.985-.469 1.547-1.078 1.547-2.156c0-1.243-.867-2.086-2.086-2.086c-.61 0-1.031.164-1.5.398L14.23 24.953c-1.359.61-2.39 1.688-2.39 3.164c0 1.5 1.055 2.531 2.39 3.164l26.344 11.836c.492.235.938.446 1.594.446"
              />
            </svg>
            <div className="flex items-center gap-3">
              <img
                src="https://w0.peakpx.com/wallpaper/324/946/HD-wallpaper-emilia-clarke-actress-monochrome-lipstick-necklace-dress-women-game-of-thrones-thumbnail.jpg"
                alt="profile"
                className="object-cover -mt-8 ml-10 w-[38px] h-[38px] rounded-full"
              />

              <div className="flex flex-col -mt-8">
                <div className="space-x-1">
                  <span className="font-fontPhone font-extrabold text-[14px]">
                    {value.name}
                  </span>
                  <span>❤</span>
                </div>
                <span className="text-[10px]">{value.status}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-b-[15px] shadow-sm max-[270px] h-[50px] mt-[345px]  ">
            <div className="flex gap-2 py-2 px-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className="text-red-600 "
                viewBox="0 0 14 14"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M9.5 6.5a2.5 2.5 0 0 1-5 0V3a2.5 2.5 0 0 1 5 0Z" />
                  <path d="M12 7h0a4.49 4.49 0 0 1-4.5 4.5h-1A4.49 4.49 0 0 1 2 7h0m5 4.5v2" />
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 36 36"
              >
                <path
                  fill="#FFCC4D"
                  d="M36 18c0 9.941-8.059 18-18 18c-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"
                />
                <path
                  fill="#664500"
                  d="M16 18c-.419 0-.809-.265-.949-.684C14.848 16.717 14.034 15 13 15c-1.062 0-1.888 1.827-2.051 2.316a1 1 0 1 1-1.897-.633C9.177 16.307 10.356 13 13 13s3.823 3.307 3.949 3.684A1 1 0 0 1 16 18m10 0a.999.999 0 0 1-.948-.684C24.849 16.717 24.033 15 23 15c-1.062 0-1.889 1.827-2.052 2.316a1 1 0 0 1-1.897-.633C19.177 16.307 20.355 13 23 13s3.823 3.307 3.948 3.684A1 1 0 0 1 26 18m-8 4c-3.623 0-6.027-.422-9-1c-.679-.131-2 0-2 2c0 4 4.595 9 11 9c6.404 0 11-5 11-9c0-2-1.321-2.132-2-2c-2.973.578-5.377 1-9 1"
                />
                <path
                  fill="#FFF"
                  d="M9 23s3 1 9 1s9-1 9-1s-1.344 6.75-9 6.75S9 23 9 23"
                />
                <path
                  fill="#664500"
                  d="M18 27.594c-3.596 0-6.272-.372-7.937-.745l-.825-1.871c.823.312 3.889.897 8.763.897c4.954 0 8.037-.616 8.864-.938l-.701 1.842c-1.634.38-4.419.815-8.164.815"
                />
              </svg>
              <input
                type="text"
                className="px-4 py-1 rounded w-full  bg-gray-100 outline-none"
                placeholder="Type something "
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 28 28"
              >
                <path
                  fill="currentColor"
                  d="M3.79 2.625c-.963-.46-2.021.42-1.746 1.451l2.016 7.533a1 1 0 0 0 .824.732l9.884 1.412c.286.04.286.454 0 .495l-9.883 1.411a1 1 0 0 0-.824.732l-2.017 7.537c-.275 1.03.783 1.91 1.746 1.451L25.288 15.13c.949-.452.949-1.804 0-2.257z"
                />
              </svg>
            </div>
          </div>

          <div className="bg-gray-200 shadow rounded-lg max-w-[100px] overflow-hidden ml-2 p-2 -mt-[380px]  ">
            <p className="text-wrap px-2">{value.messageFrom}</p>
          </div>

          <p className=" shadow border rounded-lg max-w-[100px] overflow-hidden p-2 ml-40 bg-white">
            {value.messageTo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
