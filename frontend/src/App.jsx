import React from "react";
import LoginPage from "./components/auth/LoginPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignUP from "./components/auth/SignUp";
import AdminDashboard from "./components/admin/AdminDashboard";
import Product from "./components/admin/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUP />} />

        <Route path="/admin/*" element={<AdminDashboard/>} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
