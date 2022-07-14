import Routes from "./routes";
import { GlobalStyle } from "./styles/GlobalStyle";

import NavBar from "./components/NavBar";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <NavBar />
      <GlobalStyle />
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes />
    </>
  );
};

export default App;
