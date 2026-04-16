import React from 'react';
import ReactDOM from 'react-dom/client';

// Sesuaikan path import CSS dengan struktur folder kamu
import './assets/tailwind.css'; 

import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    // Struktur wrapper utama dashboard
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        
        {/* Sidebar di sebelah kiri */}
        <Sidebar />

        {/* Konten utama di sebelah kanan */}
        <div id="main-content" className="flex-1 p-4 overflow-y-auto">
          <Header />
          <Dashboard />
        </div>
        
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);