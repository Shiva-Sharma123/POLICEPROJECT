import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login.js";
import Layout from "./Layout/Layout.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Place new routes over this */}
        <Route path="/app/*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
