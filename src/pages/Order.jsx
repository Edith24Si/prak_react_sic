import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Orders() {
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
            <PageHeader />
            <p> Ini Halaman Orders</p>

        </div>
    );
}