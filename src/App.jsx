import React from "react";
import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Order";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound"; // Komponen NotFound dinamis kita
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex w-full">
      <div id="layout-wrapper" className="flex flex-row flex-1">

        {/* Sidebar tetap muncul di semua halaman */}
        <Sidebar />

        <div id="main-content" className="flex-1 p-4 overflow-y-auto">
          {/* Header tetap muncul di atas konten */}
          <Header />

          {/* Pengaturan Navigasi Halaman */}
          <Routes>
            {/* Halaman Utama */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/error/400" element={<NotFound errorCode="400" errorTitle="Bad Request" errorDescription="Permintaan kamu tidak bisa diproses." />} />
            <Route path="/error/401" element={<NotFound errorCode="401" errorTitle="Unauthorized" errorDescription="Kamu harus login terlebih dahulu." />} />

            {/* Poin 4: Route Khusus Simulasi Error */}
            <Route
              path="/error/400"
              element={<NotFound errorCode="400" errorTitle="Bad Request" errorDescription="Server tidak dapat memahami permintaan Anda karena sintaks yang salah." />}
            />
            <Route
              path="/error/401"
              element={<NotFound errorCode="401" errorTitle="Unauthorized" errorDescription="Maaf, Anda harus login terlebih dahulu untuk melihat data ini." />}
            />
            <Route
              path="/error/403"
              element={<NotFound errorCode="403" errorTitle="Forbidden" errorDescription="Anda tidak memiliki izin (permission) untuk mengakses fitur ini." />}
            />

            {/* Default Route untuk Halaman Tidak Ditemukan (404) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;