import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/resusable/Navbar.jsx";
import Home from "./components/home/index.jsx";
import ShoppingCart from "./components/cart/index.jsx";
import ProductDetails from "./components/product/ProductDetails.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
