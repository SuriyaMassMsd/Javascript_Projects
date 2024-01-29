import CartImg from "../../public/images/money.jpg";
import { Link } from "react-router-dom";

function CartBox() {
  return (
    <div className="mt-4 ml-10 sm:mx-auto md:mx-auto lg:ml-16 mb-10 shadow-2xl max-w-[340px] sm:max-w-2xl">
      <div className=" bg-white rounded-t-lg">
        <div className="">
          <img
            src={CartImg}
            alt="cartImg"
            className="object-cover rounded-t-lg"
          />
        </div>
        <div className="p-6 space-y-4">
          <div className="flex space-x-2 items-center">
            <Link to={"/"} className="capitalize font-normal font-cartFont ">
              Insightful Brew
            </Link>
            <span className="text-gray-600 text-sm  ">21 Steptember 2023</span>
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold  font-titleCart ">
              A Guide to Earning Money and Remaking Your Wealth with the Top 10
              Better Ways
            </h1>
            <p className="text-md">
              Explore the path to financial success with 'Discover Prosperity: A
              Guide to Earning Money and Remaking Your Wealth with the Top 10
              Better Ways.' Uncover proven strategies for wealth-building,
              innovative earning methods, and expert insights in this empowering
              guide. Redefine your financial future and embark on a journey
              towards lasting prosperity.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between px-8 py-4">
          <span className="text-sm font-bold hover:underline hover:underline-offset-8 decoration-2 decoration-[#ff3b1d] hover:cursor-pointer">
            Read More
          </span>
          <ul className="flex space-x-4 bg-white">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="cursor-pointer hover:text-[#ff3b1d] fill-current"
              >
                <path d="M21.3 10.08A3 3 0 0 0 19 9h-4.56L15 7.57A4.13 4.13 0 0 0 11.11 2a1 1 0 0 0-.91.59L7.35 9H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12.73a3 3 0 0 0 2.95-2.46l1.27-7a3 3 0 0 0-.65-2.46M7 20H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2Zm13-7.82l-1.27 7a1 1 0 0 1-1 .82H9v-9.79l2.72-6.12a2.11 2.11 0 0 1 1.38 2.78l-.53 1.43a2 2 0 0 0 1.87 2.7H19a1 1 0 0 1 .77.36a1 1 0 0 1 .23.82" />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-black cursor-pointer hover:text-[#ff3b1d] "
              >
                <path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14H6.667L4 18V4h16z" />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="cursor-pointer hover:text-[#ff3b1d] fill-current  hover:stroke-[#ff3b1d]"
              >
                <path
                  stroke="#000000 "
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m12-6a3 3 0 1 0 6 0a3 3 0 1 0-6 0m0 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-6.3-7.3l6.6-3.4m-6.6 6l6.6 3.4"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CartBox;
