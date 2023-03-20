import Header from "./components/Header";
import Home from "./pages/Home";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addusers from "./pages/Addusers";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        theme="colored"
        style={{ maxWidth: "250px", fontSize: "13px" }}
      />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/addUser" element={<Addusers />} />
        <Route path="/editUsers/:id" element={<Addusers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
