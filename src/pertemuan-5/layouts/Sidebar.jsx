import { FaHome, FaListAlt, FaUser, FaPlus } from "react-icons/fa";

export default function Sidebar() {
    return (
        <div className="fixed left-0 top-0 h-screen w-64 bg-white shadow-lg p-5 flex flex-col">
            {/* LOGO */}
            <div className="border-b border-gray-100 pb-4 mb-6">
                <h1 className="text-3xl font-bold text-gray-800">
                    Sedap<span className="text-hijau">.</span>
                </h1>
                <p className="text-xs text-gray-400 mt-1">Modern Admin Dashboard</p>
            </div>

            {/* MENU NAVIGASI */}
            <nav className="flex-1">
                <ul className="space-y-2">
                    <li className="bg-hijau text-white rounded-lg p-3 flex items-center gap-3 cursor-pointer">
                        <FaHome /> <span>Dashboard</span>
                    </li>
                    <li className="text-gray-600 rounded-lg p-3 flex items-center gap-3 cursor-pointer hover:bg-gray-100">
                        <FaListAlt /> <span>Order List</span>
                    </li>
                    <li className="text-gray-600 rounded-lg p-3 flex items-center gap-3 cursor-pointer hover:bg-gray-100">
                        <FaUser /> <span>Customer</span>
                    </li>
                </ul>
            </nav>

            {/* FOOTER CARD */}
            <div className="mt-auto">
                <div className="bg-hijau rounded-lg p-3 text-white text-center mb-3">
                    <p className="text-xs mb-2">Please organize your menus through button below!</p>
                    <div className="bg-white text-hijau rounded-lg p-2 flex items-center justify-center gap-2 cursor-pointer">
                        <FaPlus /> <span className="text-sm">Add Menus</span>
                    </div>
                </div>
                <p className="text-xs text-center text-gray-400">© 2025 Sedap Admin</p>
            </div>
        </div>
    );
}