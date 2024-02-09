import React from "react";
import "../assets/css/main.css";

const AlertCard = (props) => {
  console.log(props);
  return (
    <div className="p-10 bg-gray-300 mb-4  ">
      <div className={`p-6 rounded-xl border-2 ${props.color}`}>
        <h1>{props.text}</h1>
      </div>
    </div>
  );
};

export default AlertCard;
