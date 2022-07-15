import { Container } from "./style";

import { useContext } from "react";
import { ProductsContext } from "../../providers/Products";

import Product from "../../components/Product";

const Home = () => {
  const { products, nameProduct, researchedProduct } =
    useContext(ProductsContext);

  return (
    <Container>
      <ul>
        {nameProduct === ""
          ? products.map((product) => {
              return <Product key={product.id} product={product} />;
            })
          : researchedProduct.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
      </ul>
    </Container>
  );
};

export default Home;
