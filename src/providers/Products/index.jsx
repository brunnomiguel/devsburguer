import { createContext, useEffect, useState } from "react";

import { formatedValue } from "../../utils/formatedValue";
import { dataProducts } from "./dataProducts";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const loadProducts = () => {
    const newData = dataProducts.map((product) => ({
      ...product,
      priceFormated: formatedValue(product.price),
    }));
    setProducts(newData);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
