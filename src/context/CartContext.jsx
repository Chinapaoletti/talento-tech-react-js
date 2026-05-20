import { createContext, useContext } from "react";

export const CartContext = createContext();
// TODO Context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un provider");
  }
  return context;
};
