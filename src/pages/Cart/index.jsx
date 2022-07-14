import { ContainerEmpty, Content, Container, ResumeButton } from "./style";

import { useState, useContext } from "react";
import { CartContext } from "../../providers/Cart/cart";

import { useHistory } from "react-router-dom";

import ResumeCart from "../../components/ResumeCart";
import Button from "../../components/Button";
import CartList from "../../components/CartList";

const Cart = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const history = useHistory();

  if (!cart.length) {
    return (
      <ContainerEmpty>
        <Content>
          <p>Hmm... nada por aqui, que tal fazer seu pedido?</p>
          <Button onClick={() => history.push("/")}>Adicione itens</Button>
        </Content>
      </ContainerEmpty>
    );
  }
  return (
    <Container>
      <ResumeButton>
        <Button onClick={() => setResumeOpen(true)}>Resumo do pedido</Button>
      </ResumeButton>
      {resumeOpen ? <ResumeCart onClose={() => setResumeOpen(false)} /> : null}
      <ul>
        {cart.map((product) => {
          return <CartList key={product.id} product={product} />;
        })}
      </ul>
    </Container>
  );
};

export default Cart;
