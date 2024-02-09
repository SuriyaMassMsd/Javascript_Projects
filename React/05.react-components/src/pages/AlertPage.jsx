import React from "react";
import AlertCard from "../components/AlertCard";
import coloors from "../data/colors.json";
import "../assets/css/main.css";

const datas = coloors.map((data) => {
  return <AlertCard color={data.colorName} text={data.text} />;
});

const AlertPage = () => {
  return (
    <div className="m-10">
      <h1 className="font-poppins font-semibold mb-10 text-center text-4xl">
        Alerts Components
      </h1>
      <div>{datas}</div>
    </div>
  );
};

export default AlertPage;
