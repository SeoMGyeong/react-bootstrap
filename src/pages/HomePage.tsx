import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../App";
import ProductCreatePage from "./ProductCreatePage";
import ProductPage from "./ProductPage";

const App = () => {
  return (
    <React.StrictMode>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/create" element={<ProductCreatePage />} />
        <Route path=":/productId" element={<ProductPage />} />
      </Routes>
    </React.StrictMode>
  );
};

export default App;
