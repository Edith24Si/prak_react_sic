import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
    return (
        <div id="dashboard-container">
            <PageHeader />
            
            <div id="dashboard-grid" className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* Orders Card */}
                <div id="dashboard-orders" className="flex items-center space-x-5 bg-white rounded-xl shadow-sm p-6">
                    <div id="orders-icon" className="bg-hijau rounded-full p-4">
                        <FaShoppingCart className="text-3xl text-white" />
                    </div>
                    <div id="orders-info" className="flex flex-col">
                        <span id="orders-count" className="text-3xl font-bold text-gray-800">75</span>
                        <span id="orders-text" className="text-gray-400 text-sm">Total Orders</span>
                    </div>
                </div>

                {/* Delivered Card */}
                <div id="dashboard-delivered" className="flex items-center space-x-5 bg-white rounded-xl shadow-sm p-6">
                    <div id="delivered-icon" className="bg-blue-500 rounded-full p-4">
                        <FaTruck className="text-3xl text-white" />
                    </div>
                    <div id="delivered-info" className="flex flex-col">
                        <span id="delivered-count" className="text-3xl font-bold text-gray-800">357</span>
                        <span id="delivered-text" className="text-gray-400 text-sm">Total Delivered</span>
                    </div>
                </div>

                {/* Canceled Card */}
                <div id="dashboard-canceled" className="flex items-center space-x-5 bg-white rounded-xl shadow-sm p-6">
                    <div id="canceled-icon" className="bg-red-500 rounded-full p-4">
                        <FaBan className="text-3xl text-white" />
                    </div>
                    <div id="canceled-info" className="flex flex-col">
                        <span id="canceled-count" className="text-3xl font-bold text-gray-800">65</span>
                        <span id="canceled-text" className="text-gray-400 text-sm">Total Canceled</span>
                    </div>
                </div>

                {/* Revenue Card */}
                <div id="dashboard-revenue" className="flex items-center space-x-5 bg-white rounded-xl shadow-sm p-6">
                    <div id="revenue-icon" className="bg-green-500 rounded-full p-4">
                        <FaDollarSign className="text-3xl text-white" />
                    </div>
                    <div id="revenue-info" className="flex flex-col">
                        <span id="revenue-amount" className="text-3xl font-bold text-gray-800">$128</span>
                        <span id="revenue-text" className="text-gray-400 text-sm">Total Revenue</span>
                    </div>
                </div>
            </div>
        </div>
    );
}