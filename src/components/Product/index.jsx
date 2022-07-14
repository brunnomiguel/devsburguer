import { Container } from "./style";

import { useContext } from "react";
import { CartContext } from "../../providers/Cart";

import Button from "../Button";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const { name, priceFormated, img } = product;

  return (
    <Container>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div>
        <div>
          <p>{name}</p>
          <p>{priceFormated}</p>
        </div>
        <Button onClick={() => addToCart(product)}>
          Adicionar ao Carrinho
        </Button>
      </div>
    </Container>
  );
};

export default Product;
