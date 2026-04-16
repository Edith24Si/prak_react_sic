export default function PageHeader() {
    return (
        <div className="mb-6 flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                <p className="mt-1 text-sm text-gray-500">
                    Hi, Samantha. Welcome back to Sedap Admin!
                </p>
            </div>
            <button className="flex items-center space-x-2 rounded-lg border border-gray-200 bg-white px-4 py-2 shadow-sm transition-all hover:bg-gray-50">
                <span className="rounded-md bg-blue-100 p-1 text-blue-500">📅</span>
                <div className="text-left">
                    <p className="text-xs font-semibold text-gray-800">Filter Periode</p>
                    <p className="text-xs text-gray-500">17 April 2020 - 21 May 2020</p>
                </div>
            </button>
        </div>
    );
}