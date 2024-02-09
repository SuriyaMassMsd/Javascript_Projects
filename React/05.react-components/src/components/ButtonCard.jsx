import { useState } from "react";

const ButtonCard = ({ bgColor, colorName, hoverColor }) => {
  const [hover, setHover] = useState(false);

  const hovering = () => {
    setHover(true);
  };

  const notHover = () => {
    setHover(false);
  };

  return (
    <div className="m-10 bg-gray-300 p-10 max-w-3xl mx-auto">
      <div className="grid grid-cols-2  items-center gap-10">
        <button
          type="button"
          className={`px-4 py-2 rounded text-white font-poppins `}
          style={{
            backgroundColor: hover ? hoverColor : bgColor,
          }}
          onMouseEnter={hovering}
          onMouseLeave={notHover}
        >
          {colorName}
        </button>
        <div>
          <h1 className="font-poppins  font-semibold ">
            Button Color : <span style={{ color: bgColor }}>{bgColor}</span>
          </h1>
          <h1 className="font-poppins font-semibold ">
            Button Color Name :{" "}
            <span style={{ color: hoverColor }}>{colorName}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ButtonCard;
