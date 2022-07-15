import { Container } from "./style";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

import { useHistory, Link } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../../providers/Cart";

import Button from "../Button";
import Input from "../Input";
import { ProductsContext } from "../../providers/Products";

const NavBar = () => {
  const history = useHistory();

  const { cart } = useContext(CartContext);
  const { searchProduct, nameProduct, setNameProduct } =
    useContext(ProductsContext);

  return (
    <Container>
      <Link to="/">
        <h1>
          Dev's<span>Burguer</span>
        </h1>
      </Link>
      <div>
        <Input
          type="text"
          placeholder="Pesquise por nome ou categoria"
          value={nameProduct}
          onChange={(event) => {
            setNameProduct(event.target.value);
            searchProduct(event.target.value);
          }}
        >
          <Button>
            <FaSearch />
          </Button>
        </Input>
        <Button onClick={() => history.push("/cart")}>
          <FaShoppingCart />
          {cart.length > 0 && <span>{cart.length}</span>}
        </Button>
      </div>
    </Container>
  );
};
export default NavBar;
