import React from "react";

export default function PageHeader({ title, breadcrumb, children }) {
    // Memastikan breadcrumb selalu array
    const breadcrumbArray = Array.isArray(breadcrumb) ? breadcrumb : [breadcrumb];

    return (
        <div id="pageheader-container" className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 pb-4 border-b border-gray-200">
            <div id="pageheader-left">
                <h1 id="page-title" className="text-3xl font-bold text-gray-800">
                    {title}
                </h1>
                
                <nav id="breadcrumb-links" className="flex items-center text-sm font-medium space-x-2 mt-2">
                    {breadcrumbArray.map((crumb, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <span className={index === breadcrumbArray.length - 1 ? 'text-hijau font-bold' : 'text-gray-500'}>
                                {crumb}
                            </span>
                            {index < breadcrumbArray.length - 1 && (
                                <span className="text-gray-400">/</span>
                            )}
                        </div>
                    ))}
                </nav>
            </div>

            {/* SISI KANAN: Tempat untuk meletakkan tombol (children) */}
            <div className="mt-4 sm:mt-0">
                {children}
            </div>
        </div>
    );
}