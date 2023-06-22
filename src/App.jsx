import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/resusable/Navbar.jsx";
import Home from "./components/home/index.jsx";
import ShoppingCart from "./components/cart/index.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
};

export default App;
