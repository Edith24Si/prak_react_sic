import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
    const stats = [
        { id: 1, title: "Total Orders", value: "75", icon: FaShoppingCart, color: "bg-[#00B074]", bgLight: "bg-green-50" },
        { id: 2, title: "Total Delivered", value: "357", icon: FaTruck, color: "bg-blue-500", bgLight: "bg-blue-50" },
        { id: 3, title: "Total Canceled", value: "65", icon: FaBan, color: "bg-red-500", bgLight: "bg-red-50" },
        { id: 4, title: "Total Revenue", value: "$128", icon: FaDollarSign, color: "bg-yellow-500", bgLight: "bg-yellow-50" },
    ];

    return (
        <div className="p-6">
            <PageHeader />
            
            {/* Stats Cards */}
            <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <div key={stat.id} className="flex items-center rounded-xl bg-white p-5 shadow-md">
                        <div className={`${stat.bgLight} mr-4 rounded-full p-3`}>
                            <stat.icon className={`text-2xl ${stat.color.replace('bg', 'text')}`} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">{stat.title}</p>
                            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Placeholder untuk konten lain */}
            <div className="rounded-xl bg-white p-6 shadow-md">
                <h3 className="mb-4 text-lg font-semibold text-gray-800">Recent Activity</h3>
                <p className="text-gray-500">No recent activity to display.</p>
            </div>
        </div>
    );
}