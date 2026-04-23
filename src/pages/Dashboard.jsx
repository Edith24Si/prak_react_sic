import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
    // Data untuk card statistik
    const stats = [
        { id: 1, title: "Total Orders", value: "75", icon: FaShoppingCart, color: "bg-hijau", iconColor: "text-white" },
        { id: 2, title: "Total Delivered", value: "357", icon: FaTruck, color: "bg-blue-500", iconColor: "text-white" },
        { id: 3, title: "Total Canceled", value: "65", icon: FaBan, color: "bg-red-500", iconColor: "text-white" },
        { id: 4, title: "Total Revenue", value: "$128", icon: FaDollarSign, color: "bg-yellow-500", iconColor: "text-white" },
    ];

    // IMPROVISASI 2: Data Recent Orders
    const recentOrders = [
        { id: 1, customer: "Budi Santoso", item: "Nasi Goreng", amount: "Rp 45.000", status: "Delivered", statusColor: "bg-green-100 text-green-600" },
        { id: 2, customer: "Siti Aminah", item: "Mie Ayam", amount: "Rp 35.000", status: "Processing", statusColor: "bg-blue-100 text-blue-600" },
        { id: 3, customer: "Agus Wijaya", item: "Sate Ayam", amount: "Rp 65.000", status: "Delivered", statusColor: "bg-green-100 text-green-600" },
        { id: 4, customer: "Dewi Lestari", item: "Es Teh Manis", amount: "Rp 8.000", status: "Pending", statusColor: "bg-yellow-100 text-yellow-600" },
    ];

    return (
        <div>
        <div>
            {/* Dashboard mungkin tidak butuh tombol tambah */}
            <PageHeader 
                title="Dashboard" 
                breadcrumbs={['Home', 'Dashboard Detail']} 
            />
            
            {/* Konten dashboard di bawah sini */}
        </div>
            {/* 4 Card Statistik */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                {stats.map((stat) => (
                    <div key={stat.id} className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4">
                        <div className={`${stat.color} p-3 rounded-full`}>
                            <stat.icon className={`text-2xl ${stat.iconColor}`} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">{stat.title}</p>
                            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            IMPROVISASI 2: Recent Orders Table
            <div className="bg-white rounded-xl shadow-sm p-5">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">📋 Recent Orders</h3>
                    <button className="text-sm text-hijau hover:underline">View All →</button>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-left p-3 text-sm text-gray-600">Customer</th>
                                <th className="text-left p-3 text-sm text-gray-600">Item</th>
                                <th className="text-left p-3 text-sm text-gray-600">Amount</th>
                                <th className="text-left p-3 text-sm text-gray-600">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map((order) => (
                                <tr key={order.id} className="border-t border-gray-100 hover:bg-gray-50">
                                    <td className="p-3 text-sm">{order.customer}</td>
                                    <td className="p-3 text-sm">{order.item}</td>
                                    <td className="p-3 text-sm font-semibold">{order.amount}</td>
                                    <td className="p-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${order.statusColor}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}