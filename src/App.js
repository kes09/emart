import "./App.css";
import Home from "./componet/Home";
import Navbar from "./componet/Navbar";
import {Routes, Route } from "react-router-dom";
import Products from "./componet/Products";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
