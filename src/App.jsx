import React from "react";
import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Orders from "./pages/Order";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex w-full">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        {/* Sidebar di sebelah kiri */}
        <Sidebar />

        {/* Konten utama di sebelah kanan */}
        <div id="main-content" className="flex-1 p-4 overflow-y-auto">
          <Header />
          <Routes>
             <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
