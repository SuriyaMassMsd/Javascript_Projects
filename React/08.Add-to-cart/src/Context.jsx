import React from "react";
import { createContext, useState } from "react";
import data from "./data.json";

export const Cart = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState(data);
  return <Cart.Provider value={[cart, setCart]}>{children}</Cart.Provider>;
};

export default Context;
