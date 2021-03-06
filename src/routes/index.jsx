import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../pages/Cart";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
};

export default Routes;
