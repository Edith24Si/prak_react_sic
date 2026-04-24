import { createRoot } from "react-dom/client";

import "./assets/tailwind.css";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";

createRoot(document.getElementById("root")).render(
  <div id="app-container" className="bg-gray-100 h-screen flex w-full">

    <div id="layout-wrapper" className="flex flex-row flex-1 w-full overflow-hidden">
      <Sidebar />
      
      <div id="main-content" className="flex-1 p-4 flex flex-col overflow-y-auto">
        <Header />
        
        <div id="dashboard-wrapper" className="mt-4">
          <Dashboard />
        </div>
      </div>
      
    </div>

  </div>
);