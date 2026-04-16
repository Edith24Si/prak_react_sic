import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineAreaChart } from "react-icons/md";

export default function Header() {
    return (
        <header className="ml-80 flex items-center justify-between bg-white p-4 shadow-sm">
            {/* Search Bar */}
            <div className="relative w-96">
                <input
                    type="text"
                    placeholder="Search here..."
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-4 pr-10 text-sm outline-none focus:border-[#00B074] focus:ring-1 focus:ring-[#00B074]"
                />
                <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
                {/* Notification */}
                <div className="relative cursor-pointer rounded-xl bg-blue-50 p-2 text-blue-500">
                    <FaBell className="text-lg" />
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs text-white">3</span>
                </div>

                {/* Chart Icon */}
                <div className="cursor-pointer rounded-xl bg-green-50 p-2 text-green-500">
                    <MdOutlineAreaChart className="text-lg" />
                </div>

                {/* Settings */}
                <div className="cursor-pointer rounded-xl bg-red-50 p-2 text-red-500">
                    <IoMdSettings className="text-lg" />
                </div>

                {/* Divider */}
                <div className="h-8 w-px bg-gray-200"></div>

                {/* Profile */}
                <div className="flex cursor-pointer items-center space-x-3">
                    <div className="text-right">
                        <p className="text-sm text-gray-600">Hello,</p>
                        <p className="font-semibold text-gray-800">Samantha</p>
                    </div>
                    <img
                        src="https://avatar.iran.liara.run/public/28"
                        alt="Profile"
                        className="h-10 w-10 rounded-full object-cover"
                    />
                </div>
            </div>
        </header>
    );
}