import { Container } from "./style";
import { LinearProgress, Box } from "@mui/material";

import { useContext } from "react";
import { ProductsContext } from "../../providers/Products";

import Product from "../../components/Product";

const Home = () => {
  const { products, loading } = useContext(ProductsContext);

  return (
    <Container>
      {loading ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : (
        <ul>
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </ul>
      )}
    </Container>
  );
};

export default Home;
