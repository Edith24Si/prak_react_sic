import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";
import { useState } from "react";

export default function Header() {
    // State untuk modal search (IMPROVISASI 1)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        alert(`Mencari: ${searchQuery}`);
        setIsModalOpen(false);
        setSearchQuery("");
    };

    return (
        <>
            <div className="bg-white shadow-sm p-4 flex justify-between items-center ml-64">
                {/* SEARCH BAR - Klik untuk buka modal */}
                <div className="relative w-96">
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="w-full border border-gray-200 rounded-lg p-2 pl-4 pr-10 outline-none focus:border-hijau cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                        readOnly
                    />
                    <FaSearch className="absolute right-3 top-3 text-gray-400" />
                </div>

                {/* ICON & PROFILE */}
                <div className="flex items-center gap-4">
                    <div className="relative cursor-pointer p-2 bg-blue-50 rounded-xl text-blue-500">
                        <FaBell />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">3</span>
                    </div>
                    <div className="cursor-pointer p-2 bg-green-50 rounded-xl text-green-500">
                        <FcAreaChart />
                    </div>
                    <div className="cursor-pointer p-2 bg-red-50 rounded-xl text-red-500">
                        <SlSettings />
                    </div>
                    <div className="flex items-center gap-3 border-l pl-4">
                        <div className="text-right">
                            <p className="text-xs text-gray-500">Hello,</p>
                            <p className="text-sm font-semibold">Samantha</p>
                        </div>
                        <img src="https://avatar.iran.liara.run/public/28" className="w-10 h-10 rounded-full" />
                    </div>
                </div>
            </div>

            {/* MODAL SEARCH (IMPROVISASI 1) */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ml-64">
                    <div className="bg-white rounded-xl shadow-xl w-96 p-6">
                        <h3 className="text-xl font-bold mb-4">🔍 Cari Menu</h3>
                        <input
                            type="text"
                            autoFocus
                            placeholder="Ketik kata kunci..."
                            className="w-full border border-gray-300 rounded-lg p-3 mb-4 outline-none focus:border-hijau"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                        />
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                            >
                                Batal
                            </button>
                            <button
                                onClick={handleSearch}
                                className="px-4 py-2 bg-hijau text-white rounded-lg hover:bg-green-600"
                            >
                                Cari
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}