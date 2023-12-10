import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./App.scss";
import About from "./components/About";
import Home from "./components/Home";
import Shop from "./components/Shop";
import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavMenu />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
