import Header from "./components/Header";
import Home from "./pages/Home";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        theme="colored"
        style={{ maxWidth: "250px", fontSize: "13px" }}
      />
      <Header />
      <Home />
    </>
  );
}

export default App;
