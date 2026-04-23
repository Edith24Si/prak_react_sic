import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Customers() {
    // Data untuk card statistik
    const stats = [
        { id: 1, title: "Total Orders", value: "75", icon: FaShoppingCart, color: "bg-hijau", iconColor: "text-white" },
        { id: 2, title: "Total Delivered", value: "357", icon: FaTruck, color: "bg-blue-500", iconColor: "text-white" },
        { id: 3, title: "Total Canceled", value: "65", icon: FaBan, color: "bg-red-500", iconColor: "text-white" },
        { id: 4, title: "Total Revenue", value: "$128", icon: FaDollarSign, color: "bg-yellow-500", iconColor: "text-white" },
    ];

    // Data Recent Orders
    const recentOrders = [
        { id: 1, customer: "Budi Santoso", item: "Nasi Goreng", amount: "Rp 45.000", status: "Delivered", statusColor: "bg-green-100 text-green-600" },
        { id: 2, customer: "Siti Aminah", item: "Mie Ayam", amount: "Rp 35.000", status: "Processing", statusColor: "bg-blue-100 text-blue-600" },
        { id: 3, customer: "Agus Wijaya", item: "Sate Ayam", amount: "Rp 65.000", status: "Delivered", statusColor: "bg-green-100 text-green-600" },
        { id: 4, customer: "Dewi Lestari", item: "Es Teh Manis", amount: "Rp 8.000", status: "Pending", statusColor: "bg-yellow-100 text-yellow-600" },
    ];

    return (
        <div className="flex flex-col gap-6 pb-8">
            
            {/* 1. PAGE HEADER DINAMIS */}
            <PageHeader 
                title="Customers Overview" 
                breadcrumbs={["Dashboard", "Customers"]} 
                buttonText="+ Add New Customer"
                onButtonClick={() => alert("Fitur tambah kustomer belum aktif!")}
            />

            {/* 2. SECTION STATISTIK (Grid 4 Kolom) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                {stats.map((stat) => (
                    <div key={stat.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-5 transition-transform hover:-translate-y-1">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-inner ${stat.color} ${stat.iconColor}`}>
                            <stat.icon size={22} />
                        </div>
                        <div>
                            <h3 className="text-gray-500 text-sm font-medium mb-1">{stat.title}</h3>
                            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* 3. SECTION RECENT ORDERS (Tabel) */}
            <div className="px-4 mt-2">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                        <h2 className="text-lg font-bold text-gray-800">Recent Customer Orders</h2>
                        <button className="text-sm text-hijau font-semibold hover:underline">View All</button>
                    </div>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-50/50 text-gray-500 text-sm">
                                <tr>
                                    <th className="px-6 py-4 font-medium">Customer Name</th>
                                    <th className="px-6 py-4 font-medium">Item Ordered</th>
                                    <th className="px-6 py-4 font-medium">Amount</th>
                                    <th className="px-6 py-4 font-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {recentOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-4 font-semibold text-gray-800">{order.customer}</td>
                                        <td className="px-6 py-4 text-gray-600">{order.item}</td>
                                        <td className="px-6 py-4 font-medium text-gray-800">{order.amount}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide ${order.statusColor}`}>
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

        </div>
    );
}