import { createContext, useState } from "react";

import { toast } from "react-toastify";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("@kenzieburguer:cart")) || []
  );

  const addQuantity = (id) => {
    const indexItem = cart.findIndex((item) => item.id === id);
    if (indexItem >= 0) {
      cart[indexItem].quantity += 1;
    }
    localStorage.setItem("@kenzieburguer:cart", JSON.stringify([...cart]));
    setCart([...cart]);
  };
  const removeQuantity = (id) => {
    const indexItem = cart.findIndex((item) => item.id === id);
    if (indexItem >= 0) {
      if (cart[indexItem].quantity > 1) {
        cart[indexItem].quantity -= 1;
      }
    }
    localStorage.setItem("@kenzieburguer:cart", JSON.stringify([...cart]));
    setCart([...cart]);
  };

  const addToCart = (item) => {
    const findProduct = cart.find((product) => product.name === item.name);

    if (findProduct !== undefined) {
      toast.error("Produto já adicionado ao carrinho!");
    } else {
      localStorage.setItem(
        "@kenzieburguer:cart",
        JSON.stringify([...cart, item])
      );
      setCart([...cart, item]);
      toast.success("Produto adicionado ao carrinho!");
    }
  };

  const removeToCart = (itemId) => {
    const newCart = cart.filter((item) => item.id !== itemId);
    localStorage.setItem("@kenzieburguer:cart", JSON.stringify([...newCart]));
    setCart(newCart);
    toast.success("Produto removido!");
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, addQuantity, removeQuantity, removeToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
