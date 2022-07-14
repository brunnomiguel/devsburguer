import { ProductsProvider } from "./Products/products";

const Providers = ({ children }) => {
  return <ProductsProvider>{children}</ProductsProvider>;
};
export default Providers;
