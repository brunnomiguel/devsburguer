import Routes from "./routes";
import { GlobalStyle } from "./styles/GlobalStyle";

import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <NavBar />
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
      <Routes />
    </>
  );
};

export default App;
