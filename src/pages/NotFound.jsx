export default function NotFound({ 
    errorCode = "404", 
    errorTitle = "Halaman Tidak Ditemukan", 
    errorDescription = "Halaman yang kamu cari tidak tersedia atau sudah dipindahkan." 
}) {
    return (
        <div id="dashboard-container" className="flex h-screen bg-gray-100">
            <div className="flex-1 flex flex-col justify-center items-center">
                <main className="flex-1 flex flex-col justify-center items-center text-center p-6">
                    
                    {/* Menampilkan errorCode dinamis */}
                    <h1 className="text-7xl font-bold text-green-500 mb-4">
                        {errorCode}
                    </h1>

                    {/* Menampilkan errorTitle dinamis */}
                    <p className="text-xl text-gray-700 mb-2 font-bold">
                        {errorTitle}
                    </p>

                    {/* Menampilkan errorDescription dinamis */}
                    <p className="text-gray-500 mb-6 max-w-md">
                        {errorDescription}
                    </p>

                    <button
                        onClick={() => window.location.href = "/"}
                        className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
                    >
                        Kembali ke Dashboard
                    </button>
                </main>
            </div>
        </div>
    );
}