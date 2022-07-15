import { createContext, useEffect, useState } from "react";

import formatedValue from "../../utils/formatedValue";
import { dataProducts } from "./dataProducts";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [researchedProduct, setResearchedProduct] = useState([]);
  const [nameProduct, setNameProduct] = useState("");

  const searchProduct = (searchItem) => {
    searchItem = searchItem.toLocaleLowerCase();
    const filteredProduct = products.filter((product) =>
      product.name.toLocaleLowerCase().includes(searchItem) ||
      product.category.toLocaleLowerCase().includes(searchItem)
        ? product
        : null
    );
    setResearchedProduct(filteredProduct);
  };

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
    <ProductsContext.Provider
      value={{
        products,
        researchedProduct,
        searchProduct,
        nameProduct,
        setNameProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
