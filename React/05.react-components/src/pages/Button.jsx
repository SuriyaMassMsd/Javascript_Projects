import React from "react";
import ButtonCard from "../components/ButtonCard.jsx";
import Colors from "../data/button.json";

const Button = () => {
  return (
    <div>
      <h1 className="text-center p-5 text-4xl font-poppins font-bold">
        Button Components
      </h1>
      {Colors.map(({ id, colorCode, colorName, hoverColorCode }) => {
        return (
          <div key={id}>
            <ButtonCard
              bgColor={colorCode}
              colorName={colorName}
              hoverColor={hoverColorCode}
            ></ButtonCard>
          </div>
        );
      })}
    </div>
  );
};

export default Button;
