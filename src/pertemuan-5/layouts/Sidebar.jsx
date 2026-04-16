import { LuLayoutDashboard, LuListOrdered, LuUsers, LuPlus } from "react-icons/lu";
import { useState } from "react";

export default function Sidebar() {
    // IMPROVISASI: Active Menu State
    const [activeMenu, setActiveMenu] = useState("Dashboard");

    const menuItems = [
        { id: "Dashboard", icon: LuLayoutDashboard, label: "Dashboard" },
        { id: "Orders", icon: LuListOrdered, label: "Orders" },
        { id: "Customers", icon: LuUsers, label: "Customers" },
    ];

    return (
        <div id="sidebar" className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
            {/* Logo */}
            <div id="sidebar-logo" className="flex flex-col">
                <span id="logo-title" className="font-poppins text-[48px] text-gray-900 leading-tight">
                    Sedap <b id="logo-dot" className="text-hijau">.</b>
                </span>
                <span id="logo-subtitle" className="font-semibold text-gray-400">Modern Admin Dashboard</span>
            </div>

            {/* List Menu */}
            <div id="sidebar-menu" className="mt-10">
                <ul id="menu-list" className="space-y-3">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <div 
                                id={`menu-${item.id.toLowerCase()}`} 
                                className={`flex cursor-pointer items-center rounded-xl p-4 font-medium transition-all ${
                                    activeMenu === item.label
                                        ? 'bg-hijau text-white shadow-md'
                                        : 'text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold'
                                }`}
                                onClick={() => setActiveMenu(item.label)}
                            >
                                <item.icon className={`mr-4 text-xl ${activeMenu === item.label ? 'text-white' : ''}`} /> 
                                {item.label}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* 3. FOOTER SECTION (Kembali utuh seperti aslinya + sedikit perbaikan posisi) */}
            <div id="sidebar-footer" className="mt-auto">
                <div id="footer-card" className="bg-hijau px-4 py-6 rounded-3xl shadow-lg mb-10 flex items-center relative overflow-hidden">
                    <div id="footer-text" className="text-white text-sm z-10 w-2/3">
                        <p className="mb-3 leading-tight">Please organize your menus through button below!</p>
                        <div id="add-menu-button" className="flex justify-center items-center p-2 bg-white rounded-md space-x-2 cursor-pointer active:scale-95 transition-transform shadow-sm">
                            <span className="text-gray-600 font-bold flex items-center text-xs">
                                <LuPlus className="mr-1" /> Add Menus
                            </span>
                        </div>
                    </div>
                    {/* Foto Profil disesuaikan posisinya agar rapi */}
                    <img 
                        className="w-16 h-16 rounded-full object-cover border-2 border-white/50 ml-auto shadow-md" 
                        src="/img/foto.png" 
                        alt="avatar" 
                    />
                </div>
                
                <div className="flex flex-col">
                    <span id="footer-brand" className="font-bold text-gray-800 text-sm italic">
                        Sedap Restaurant Admin Dashboard
                    </span>
                    <p id="footer-copyright" className="font-light text-gray-400 text-[10px] tracking-wide">
                        © 2026 All Right Reserved
                    </p>
                </div>
            </div>
        </div>
    );
}