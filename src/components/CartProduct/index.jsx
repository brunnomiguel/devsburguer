import { CartContent } from "./style";
import { FaTrashAlt, FaMinus, FaPlus } from "react-icons/fa";

import { useContext } from "react";
import { CartContext } from "../../providers/Cart/cart";

const CartList = ({ product }) => {
  const { removeToCart, addQuantity, removeQuantity } = useContext(CartContext);
  const { id, name, img, priceFormated, quantity } = product;

  return (
    <CartContent>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div>
        <div>
          <p>{name}</p>
          <p>
            <FaMinus onClick={() => removeQuantity(id)} />
            <span>{quantity}</span>
            <FaPlus onClick={() => addQuantity(id)} />
          </p>
        </div>
        <div>
          <p>{priceFormated}</p>
          <FaTrashAlt onClick={() => removeToCart(id)} />
        </div>
      </div>
    </CartContent>
  );
};

export default CartList;
