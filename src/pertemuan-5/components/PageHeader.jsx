export default function PageHeader() {
    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            <div id="pageheader-left" className="flex flex-col">
                <span id="page-title" className="text-3xl font-bold text-gray-800">
                    Dashboard
                </span>
                <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
                    <span id="breadcrumb-home" className="text-gray-400 text-sm">Hi, Samantha. Welcome back to Sedap Admin!</span>
                </div>
            </div>
            <div id="action-button">
                <button id="add-button" className="bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-lg shadow-sm flex items-center space-x-2">
                    <span className="bg-blue-100 text-blue-500 p-1 rounded-md">📅</span>
                    <div className="flex flex-col text-left text-xs">
                        <b className="text-gray-800 text-sm">Filter Periode</b>
                        <span>17 April 2020 - 21 May 2020</span>
                    </div>
                </button>
            </div>
        </div>
    );
}