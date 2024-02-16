import React, { useContext } from "react";
import Card from "../components/Card.jsx";
import { Cart } from "../Context.jsx";

const CardPage = () => {
  const [cart, setCart] = useContext(Cart);

  const total = cart.reduce((prev, cur) => {
    return prev + cur.total;
    // console.log(cur.price);
  }, 0);
  // <h1>{total.toFixed(2)}</h1>;

  return (
    <div>
      <div className="border-b-2 pt-4 space-y-4 mx-20">
        <h1 className="text-3xl  ">Your Cart</h1>
        <p className=" text-zinc-400 text-sm font-bold">Continue shoping</p>
      </div>
      <div className="flex gap-10 ml-20 mt-4">
        <div className="max-w-4xl mr-8">
          {cart.map((data) => {
            const { title, category, description, id, image, price } = data;
            return (
              <Card
                // total={total}
                key={id}
                id={id}
                image={image}
                price={price}
                title={title}
                cate={category}
                des={description}
              />
            );
          })}
        </div>
        <div className="flex flex-col space-y-2">
          <h1>Enter Promo Code</h1>
          <div className="flex gap-2">
            <input
              type="text"
              className="pl-4 w-44 py-1 placeholder:text-gray-400 outline-none border rounded border-gray-400"
              placeholder="Promo Code"
            />
            <button className="bg-indigo-600 text-white px-6 py-1 rounded ">
              Submit
            </button>
          </div>

          <h1 className="text-lg font-semibold   pt-4">Promotions</h1>
          <div className="flex py-2 border-b border-gray-400 items-center justify-between">
            <h1>Free Shiping</h1>
            <div className="flex gap-2 items-center">
              <p className="line-through text-sm">₹34</p>
              <p className="text-green-600 font-semibold">Free</p>
            </div>
          </div>

          <div className="flex justify-between py-2">
            <h1>Subtotal</h1>
            <h1 className="font-semibold">₹ {total.toFixed(2)}</h1>
          </div>
          <div className="flex justify-between">
            <h1>Shiping Cost</h1>
            <h1>₹ {34}</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="text-red-400">Shiping Discount</h1>
            <h1 className="text-red-400">₹ {34}</h1>
          </div>
          <div className="flex justify-between font-semibold py-2">
            <h1>Estimated Total</h1>
            <h1 className="font-semibold">₹ {total.toFixed(2)}</h1>
          </div>
          <button className="bg-indigo-600 px-4 py-2 text-white font-semibold rounded">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
