import "./App.css";
import Home from "./componet/Home";
import Navbar from "./componet/Navbar";
import {Routes, Route, Navigate } from "react-router-dom";
import Products from "./componet/Products";
import Product from "./componet/Product";
function App() {
  return (
    <> 
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
