import React from 'react';

export default function NotFound({ 
    errorCode = "404", 
    errorTitle = "Halaman Tidak Ditemukan", 
    errorDescription = "Halaman yang kamu cari tidak tersedia atau sudah dipindahkan." 
}) {
    
    // 1. LOKASI MELETAKKAN URL (Kamus Gambar)
    const errorImages = {
        "400": "https://img.freepik.com/free-vector/400-error-bad-request-concept-illustration_114360-1921.jpg",
        "401": "https://img.freepik.com/free-vector/401-error-unauthorized-concept-illustration_114360-1922.jpg",
        "403": "https://img.freepik.com/free-vector/403-error-forbidden-concept-illustration_114360-1935.jpg",
        "404": "https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg",
        "default": "https://img.freepik.com/free-vector/404-error-lost-space-concept-illustration_114360-7901.jpg"
    };

    // 2. LOGIKA MEMILIH GAMBAR
    const selectedImage = errorImages[errorCode] || errorImages["default"];

    return (
        <div id="dashboard-container" className="flex h-screen bg-gray-100 w-full">
            <div className="flex-1 flex flex-col justify-center items-center">
                <main className="flex-1 flex flex-col justify-center items-center text-center p-6 bg-white m-10 rounded-[40px] shadow-sm border border-gray-100 max-w-2xl">
                    
                    {/* 3. TAG UNTUK MENAMPILKAN GAMBAR */}
                    <div className="mb-6 w-full max-w-[300px]">
                        <img 
                            src={selectedImage} 
                            alt={`Error ${errorCode}`} 
                            className="w-full h-auto object-contain rounded-2xl"
                        />
                    </div>

                    <h1 className="text-7xl font-bold text-hijau mb-4">
                        {errorCode}
                    </h1>

                    <p className="text-xl text-gray-700 mb-2 font-bold">
                        {errorTitle}
                    </p>

                    <p className="text-gray-500 mb-6 max-w-md">
                        {errorDescription}
                    </p>

                    <button
                        onClick={() => window.location.href = "/"}
                        className="bg-hijau text-white px-8 py-3 rounded-full hover:bg-green-600 transition-all font-bold shadow-lg"
                    >
                        Kembali ke Dashboard
                    </button>
                </main>
            </div>
        </div>
    );
}