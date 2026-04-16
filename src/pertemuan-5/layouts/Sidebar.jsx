import { FaHome, FaListAlt, FaUser, FaPlus } from "react-icons/fa";

export default function Sidebar() {
    return (
        <div className="fixed left-0 top-0 flex h-screen w-80 flex-col bg-white p-6 shadow-xl">
            {/* Logo */}
            <div className="mb-8 flex flex-col border-b border-gray-100 pb-6">
                <span className="font-poppins text-5xl font-bold text-gray-800">
                    Sedap<span className="text-[#00B074]">.</span>
                </span>
                <span className="mt-1 text-sm text-gray-400">Modern Admin Dashboard</span>
            </div>

            {/* Menu */}
            <div className="flex-1">
                <ul className="space-y-2">
                    <li>
                        <div className="flex cursor-pointer items-center rounded-xl bg-[#00B074] p-3 text-white transition-all">
                            <FaHome className="mr-3 text-lg" />
                            <span className="font-medium">Dashboard</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex cursor-pointer items-center rounded-xl p-3 text-gray-600 transition-all hover:bg-green-50 hover:text-[#00B074]">
                            <FaListAlt className="mr-3 text-lg" />
                            <span className="font-medium">Order List</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex cursor-pointer items-center rounded-xl p-3 text-gray-600 transition-all hover:bg-green-50 hover:text-[#00B074]">
                            <FaUser className="mr-3 text-lg" />
                            <span className="font-medium">Customer</span>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Footer Card */}
            <div className="mt-auto">
                <div className="mb-4 rounded-xl bg-[#00B074] p-4 text-white">
                    <p className="mb-3 text-sm">Please organize your menus through button below!</p>
                    <div className="flex cursor-pointer items-center justify-center rounded-lg bg-white p-2 text-[#00B074] transition-all hover:bg-gray-100">
                        <FaPlus className="mr-2 text-sm" />
                        <span className="text-sm font-medium">Add Menus</span>
                    </div>
                </div>
                <p className="text-center text-xs text-gray-400">Sedap Restaurant Admin Dashboard</p>
                <p className="mt-1 text-center text-xs text-gray-400">&copy; 2025 All Right Reserved</p>
            </div>
        </div>
    );
}