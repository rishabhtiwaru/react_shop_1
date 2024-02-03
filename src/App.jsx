import React, { useState } from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar"; // Update the path accordingly
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "product":
        return <Product />;
      case "productList":
        return <ProductList />;
      case "register":
        return <Register />;
      case "login":
        return <Login />;
      case "cart":
        return <Cart />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      <div className="content">{renderPage()}</div>
    </div>
  );
};

export default App;
