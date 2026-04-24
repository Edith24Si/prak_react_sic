import { LuLayoutDashboard, LuListOrdered, LuUsers, LuPlus, LuTriangleAlert, LuLock, LuUserX, LuCircleHelp } from "react-icons/lu";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    const menuItems = [
        { id: "Dashboard", icon: LuLayoutDashboard, label: "Dashboard", to: "/" },
        { id: "Orders", icon: LuListOrdered, label: "Orders", to: "/orders" },
        { id: "Customers", icon: LuUsers, label: "Customers", to: "/customers" },
    ];

    // Menu khusus untuk simulasi error (Tugas Poin 4)
    const errorMenus = [
        { id: "Error400", icon: LuTriangleAlert, label: "Error 400", to: "/error/400" },
        { id: "Error401", icon: LuUserX, label: "Error 401", to: "/error/401" },
        { id: "Error403", icon: LuLock, label: "Error 403", to: "/error/403" },
        { id: "Error404", icon: LuCircleHelp, label: "Error 404", to: "/halaman-ngasal" }, // Test 404
    ];

    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4 space-x-3 transition-all
        ${isActive ? 
            "text-hijau bg-green-100 font-extrabold shadow-sm" : 
            "text-gray-500 hover:text-hijau hover:bg-green-50 hover:font-bold"
        }`;

    return (
        <div id="sidebar" className="flex min-h-screen w-80 flex-col bg-white p-8 shadow-xl border-r border-gray-100">
            {/* Logo Section */}
            <div id="sidebar-logo" className="flex flex-col mb-10">
                <span id="logo-title" className="font-poppins text-4xl text-gray-900 leading-tight">
                    Sedap <b className="text-hijau">.</b>
                </span>
                <p className="text-xs text-gray-400 font-medium tracking-widest uppercase">Admin Dashboard</p>
            </div>

            {/* Menu List Utama */}
            <nav className="flex-1 space-y-2">
                <p className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Main Menu</p>
                {menuItems.map((item) => (
                    <NavLink key={item.id} to={item.to} className={menuClass}>
                        <item.icon size={20} />
                        <span className="text-sm">{item.label}</span>
                    </NavLink>
                ))}

                {/* Simulasi Error Section (Poin 4) */}
                <div className="pt-6 mt-6 border-t border-gray-100">
                    <p className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Simulasi Error</p>
                    <div className="space-y-1">
                        {errorMenus.map((item) => (
                            <NavLink key={item.id} to={item.to} className={menuClass}>
                                <item.icon size={18} />
                                <span className="text-sm">{item.label}</span>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Footer Sidebar */}
            <div id="sidebar-footer" className="mt-auto">
                <div className="bg-hijau rounded-2xl p-4 flex items-center relative overflow-hidden mb-4 shadow-lg shadow-green-100">
                    <div className="z-10 w-full text-white">
                        <p className="text-xs opacity-80 leading-tight mb-3">Ingin menambah menu?</p>
                        <button className="bg-white text-hijau text-[10px] font-bold px-3 py-2 rounded-lg flex items-center justify-center w-full active:scale-95 transition-transform">
                            <LuPlus className="mr-1" /> Add Menus
                        </button>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-gray-800 text-xs italic">Sedap Restaurant Admin</span>
                    <p className="text-gray-400 text-[10px]">© 2026 All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
}