import React from "react";
import Card from "../components/Card";

const CardPage = () => {
  return (
    <div className="bg-gray-300 m-10 p-10 mx-auto">
      <Card
        title="Card title"
        text=" Some quick example text to build on the card title and make up the
      bulk of the card's content."
        btnText="Go somewhere"
      />
    </div>
  );
};

export default CardPage;
