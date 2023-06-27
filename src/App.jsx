import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/resusable/Navbar.jsx";
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import ProductInfo from "./pages/ProductInfo.jsx";
import Login from "./pages/Login.jsx";
import User from "./pages/User.jsx";
import Deals from "./pages/Deals.jsx";
import Products from "./pages/Products.jsx";
import Signup from "./pages/Signup.jsx";
import Orders from "./pages/Orders.jsx";
import Checkout from "./pages/Checkout.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="bg-dark-50 dark:bg-dark-800 mx-auto w-screen sm:m-0 p-10 h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/product/:id" element={<ProductInfo />} />
          <Route path="/products" element={<Products />} />
          <Route path="/deals/" element={<Deals />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<User />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
