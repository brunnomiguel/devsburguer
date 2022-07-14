import { ProductsProvider } from "./Products/products";
import { CartProvider } from "./Cart/cart";

const Providers = ({ children }) => {
  return (
    <ProductsProvider>
      <CartProvider>{children}</CartProvider>
    </ProductsProvider>
  );
};
export default Providers;
