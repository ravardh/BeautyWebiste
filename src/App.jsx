import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { Product } from "./pages/product";
import { Contact } from "./pages/contact";
import { ProductDetails } from "./pages/productdetails";


function App() {
  return (
    <>
      <Router>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
