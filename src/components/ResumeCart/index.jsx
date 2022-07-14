import { Container, MainContainer, TitleContent, Content } from "./style";
import { FaTimes } from "react-icons/fa";

import { useContext } from "react";
import { CartContext } from "../../providers/Cart/cart";

import formatedValue from "../../utils/formatedValue";
import Button from "../Button";

const ResumeCart = ({ id = "modal", onClose = () => {} }) => {
  const { cart } = useContext(CartContext);
  const handleOutsideClick = (event) => {
    if (event.target.id === id) {
      onClose();
    }
  };

  const amount = formatedValue(
    cart
      .reduce(
        (acumulator, currentProduct) =>
          acumulator + currentProduct.price * currentProduct.quantity,
        0
      )
      .toFixed(2)
  );

  return (
    <MainContainer id={id} onClick={handleOutsideClick}>
      <Container>
        <TitleContent>
          <h2>Resumo do pedido</h2>
          <Button onClick={onClose}>
            <FaTimes />
          </Button>
        </TitleContent>
        <Content>
          <ul>
            <li>
              <div>
                <p>Quantity</p>
                <p>Unitary value</p>
                <p>Subtotal</p>
              </div>
            </li>
            {cart.map(({ id, name, price, quantity }) => {
              return (
                <li key={id}>
                  <p>{name}</p>
                  <div>
                    <p>{quantity}</p>
                    <p>{formatedValue(price)}</p>
                    <p>{formatedValue(quantity * price)}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <span>
            Amount: <span>{amount}</span>
          </span>
          <Button>Finalizar pedido</Button>
        </Content>
      </Container>
    </MainContainer>
  );
};
export default ResumeCart;
