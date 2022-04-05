import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./client/home/Home.page";
import Shop from "./client/shop/Shop.page";

export default function RouterPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}
