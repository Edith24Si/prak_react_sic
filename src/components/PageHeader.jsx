import { LuFilter } from "react-icons/lu";
import { useState } from "react";

export default function PageHeader({ title, breadcrumbs, buttonText, onButtonClick }) {
    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4 mt-4">
            
            {/* SISI KIRI: Judul & Breadcrumb Dinamis */}
            <div id="pageheader-left" className="flex flex-col">
                <span id="page-title" className="text-3xl font-semibold">
                    {title}
                </span>
                
                <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
                    {/* Melakukan mapping (looping) array breadcrumbs */}
                    {breadcrumbs.map((crumb, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <span className={index === breadcrumbs.length - 1 ? 'text-hijau font-bold' : 'text-gray-500'}>
                                {crumb}
                            </span>
                            {/* Menampilkan separator '/' jika bukan item paling akhir */}
                            {index < breadcrumbs.length - 1 && (
                                <span className="text-gray-500">/</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* SISI KANAN: Tombol (Hanya dirender jika buttonText dikirim) */}
            {buttonText && (
                <div id="action-button">
                    <button 
                        id="add-button" 
                        onClick={onButtonClick}
                        className="bg-hijau text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                    >
                        {buttonText}
                    </button>
                </div>
            )}
            
        </div>
    );
}