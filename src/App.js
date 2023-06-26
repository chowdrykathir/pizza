import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Cart from "./Cart"
import Order from "./Order"
import { CartProvider } from "react-use-cart";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
    </Routes>
        <Footer />
      </Router>
    </CartProvider>
    </div>
  );
}
    
export default App;



// import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Home from "./Home";
// import Cart from "./Cart";
// import { CartProvider } from "react-use-cart";

// function App() {
//   return (
//     <div className="App">
//       <CartProvider>
//         <Home />
//         <Cart />
//       </CartProvider>
//     </div>
//   );
// }
// export default App;
