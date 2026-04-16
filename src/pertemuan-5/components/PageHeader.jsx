import { useState } from "react";

export default function PageHeader() {
    // State untuk dropdown filter (IMPROVISASI 3)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState("Hari Ini");

    const filters = ["Hari Ini", "Minggu Ini", "Bulan Ini", "Tahun Ini"];

    return (
        <div className="flex justify-between items-center mb-6">
            {/* Bagian Kiri - Title */}
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                <p className="text-sm text-gray-500 mt-1">
                    Hi, Samantha. Welcome back to Sedap Admin!
                </p>
            </div>

            {/* Bagian Kanan - Filter Dropdown (IMPROVISASI 3) */}
            <div className="relative">
                <button
                    className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm hover:bg-gray-50"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    <span className="bg-blue-100 text-blue-500 p-1 rounded-md">📅</span>
                    <div className="text-left">
                        <p className="text-xs font-semibold text-gray-800">Filter Periode</p>
                        <p className="text-xs text-gray-500">{selectedFilter}</p>
                    </div>
                    <span className="text-gray-400">▼</span>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                                    selectedFilter === filter ? 'bg-hijau text-white' : 'text-gray-700'
                                }`}
                                onClick={() => {
                                    setSelectedFilter(filter);
                                    setIsDropdownOpen(false);
                                }}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}