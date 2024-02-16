// import { data } from "autoprefixer";
import React, { useEffect, useState, useContext } from "react";
import { Cart } from "../Context.jsx";

const Card = ({ title, cate, des, image, price }) => {
  const [pricee, setPrice] = useState(1);
  // const [pr, setPri] = useState([]);

  const [cart, setCart] = useContext(Cart);

  useEffect(() => {
    setCart(
      cart.map((itmes) => {
        if (itmes.title === title) {
          return { ...itmes, quantity: pricee, total: price * pricee };
        }
        return itmes;
      })
    );
  }, [pricee]);

  // console.log(total);

  return (
    <div>
      <div className="bg-white-400 shadow flex justify-between items-center p-4  max-w-4xl mx-auto m-4">
        <div className="flex items-center gap-10 ">
          <img src={image} className="w-16 h-16" alt="img" />

          <div className="space-y-3">
            <h1 className="font-semibold">{title}</h1>
            {/* <p className="text-gray-500 ">{des}</p> */}

            <div className="space-y-3">
              <h1 className="bg-indigo-600 rounded  px-4 text-white font-semibold inline-block ">
                {cate}
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex items-center gap-4">
              <button
                className={`cursor-pointer hover:bg-indigo-500 py-1 rounded font-semibold px-3 ${
                  pricee === 0 ? "bg-indigo-400" : "bg-indigo-600 "
                }`}
                onClick={() =>
                  setPrice((pricee) => {
                    if (pricee === 0) {
                      return pricee;
                    }

                    return pricee - 1;
                  })
                }
              >
                -
              </button>
              <p className="font-bold">{pricee}</p>
              <button
                className="bg-indigo-600 cursor-pointer hover:bg-indigo-500 py-1 rounded font-semibold   px-3"
                onClick={() => setPrice((pricee) => pricee + 1)}
              >
                +
              </button>
            </div>
            <h1 className="flex items-center font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M212 80a12 12 0 0 1-12 12h-28a64.07 64.07 0 0 1-64 64h-5l65 59.12a12 12 0 1 1-16.14 17.76l-88-80A12 12 0 0 1 72 132h36a40 40 0 0 0 40-40H72a12 12 0 0 1 0-24h68a40 40 0 0 0-32-16H72a12 12 0 0 1 0-24h128a12 12 0 0 1 0 24h-42.09a64 64 0 0 1 9.4 16H200a12 12 0 0 1 12 12"
                ></path>
              </svg>
              {price}
            </h1>
          </div>
        </div>
      </div>
      {/* <h1>total {pricee}</h1> */}

      {/* <h1>total {pricee}</h1> */}
      {/* <h1>{pr}</h1> */}
    </div>
  );
};

export default Card;
