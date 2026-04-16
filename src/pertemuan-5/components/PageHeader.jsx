import { LuFilter } from "react-icons/lu";
import { useState } from "react";

export default function PageHeader() {
    // IMPROVISASI: Filter Dropdown
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState("Hari Ini");

    const filterOptions = ["Hari Ini", "Minggu Ini", "Bulan Ini", "Tahun Ini"];

    return (
        <div id="pageheader-container" className="p-4 mt-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                
                {/* SISI KIRI: Judul & Breadcrumb (TIDAK DIUBAH) */}
                <div id="pageheader-left" className="flex flex-col">
                    <span id="page-title" className="text-3xl font-bold text-gray-800">
                        Dashboard
                    </span>

                    <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-1 text-sm">
                        <span className="text-gray-400">Home</span>
                        <span className="text-gray-400">//</span>
                        <span className="text-gray-400">Home Detail</span>
                        <span className="text-gray-400">//</span>
                        <span className="text-gray-400 font-bold text-hijau">
                            Home Very Detail
                        </span>
                    </div>
                </div>

                {/* SISI KANAN: IMPROVISASI FILTER DROPDOWN */}
                <div className="relative">
                    <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm hover:bg-gray-50 transition-all"
                    >
                        <LuFilter className="text-hijau" size={18} />
                        <span className="text-sm text-gray-700">Filter</span>
                        <span className="text-xs text-hijau font-medium bg-green-50 px-2 py-0.5 rounded-full">
                            {selectedFilter}
                        </span>
                        <span className={`text-gray-400 text-xs transition-transform ${isFilterOpen ? 'rotate-180' : ''}`}>
                            ▼
                        </span>
                    </button>

                    {/* Dropdown Menu */}
                    {isFilterOpen && (
                        <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg border border-gray-200 z-10 overflow-hidden">
                            {filterOptions.map((option) => (
                                <button
                                    key={option}
                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-all ${
                                        selectedFilter === option ? 'bg-green-50 text-hijau font-medium' : 'text-gray-700'
                                    }`}
                                    onClick={() => {
                                        setSelectedFilter(option);
                                        setIsFilterOpen(false);
                                    }}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Garis pemisah (TIDAK DIUBAH) */}
            <div className="w-full h-[1px] bg-gray-200/50 mt-6"></div>
        </div>
    );
}