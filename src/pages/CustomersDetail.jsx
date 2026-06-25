import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CustomerData from "../data/CustomersData.json";
import { ordersData } from "../data/DataDummy";
import { getLevelFromPoints, calculatePointsFromOrder } from "../lib/loyalty";
import PageHeader from "../components/PageHeader";

export default function CustomersDetail() {
    const { id } = useParams();
    const [customer, setCustomer] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const findCustomer = CustomerData.find(
            (item) => item.id === parseInt(id)
        );
        if (!findCustomer) {
            setError("Customer tidak ditemukan");
            return;
        }
        setCustomer(findCustomer);
    }, [id]);

    const loyaltyBadge = (loyalty) => {
        switch (loyalty) {
            case "Platinum": return "bg-slate-700 text-white";
            case "Gold": return "bg-amber-400 text-white";
            case "Silver": return "bg-gray-300 text-slate-800";
            case "Bronze": return "bg-orange-600 text-white";
            default: return "bg-gray-300 text-slate-800";
        }
    };

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <p className="text-red-600 font-semibold">{error}</p>
                    <Link to="/customers" className="text-emerald-500 underline text-sm mt-2 block">
                        Kembali ke Customers
                    </Link>
                </div>
            </div>
        );
    }

    if (!customer) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-gray-600 text-lg font-medium animate-pulse">
                    Loading...
                </div>
            </div>
        );
    }

    const customerOrders = ordersData.filter(
        (order) => order.customerName === customer.name
    );

    const totalPoints = customerOrders
        .filter((order) => order.status === "Completed")
        .reduce((total, order) => total + calculatePointsFromOrder(order.totalPrice), 0);

    const currentLevel = getLevelFromPoints(totalPoints);

    return (
        // Gunakan block layout agar element turun ke bawah secara natural, bukan flex menyamping
        <div className="block w-full p-6 text-left animate-fadeIn">

            {/* PAGEHEADER */}
            <PageHeader
                title="Customer Profile"
                breadcrumb={["Dashboard", "Customers", "Detail"]}
            >
                <Link
                    to="/customers"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold transition text-sm shadow-sm inline-block"
                >
                    ← Back to Customers
                </Link>
            </PageHeader>

            {/* CONTAINER KARTU PROFIL */}
            {/* Menggunakan mx-auto tanpa pembungkus flex eksternal agar otomatis berada di tengah pembungkusnya */}
            <div className="max-w-4xl mx-auto mt-6">
                <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100">
                    
                    {/* CARD HEADER */}
                    <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 text-white">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            <div>
                                <p className="text-slate-300 text-sm mb-1">
                                    Customer ID : #{customer.id}
                                </p>
                                <h1 className="text-3xl font-bold">
                                    {customer.name}
                                </h1>
                            </div>
                            <span className={`px-4 py-2 rounded-full text-xs font-bold shadow-sm ${loyaltyBadge(currentLevel)}`}>
                                {currentLevel} Member
                            </span>
                        </div>
                    </div>

                    {/* DETAIL FORM */}
                    <div className="p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* SISI KIRI (AVATAR) */}
                            <div>
                                <div className="bg-slate-50 rounded-2xl p-10 flex items-center justify-center h-full border border-slate-100">
                                    <div className="text-center">
                                        <div className="text-7xl mb-4">👤</div>
                                        <p className="text-slate-400 text-sm font-medium">
                                            Customer Profile
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* SISI KANAN (INFO LENGKAP) */}
                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Email Address</p>
                                    <h2 className="text-base font-semibold text-slate-800">{customer.email}</h2>
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Phone Number</p>
                                    <h2 className="text-base font-semibold text-slate-800">{customer.phone}</h2>
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Loyalty Tier</p>
                                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${loyaltyBadge(currentLevel)}`}>
                                        {currentLevel}
                                    </span>
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Accumulated Points</p>
                                    <h2 className="text-xl font-bold text-emerald-600">
                                        {totalPoints} <span className="text-sm font-normal text-slate-500">Points</span>
                                    </h2>
                                </div>

                                <div className="pt-4 border-t border-slate-100">
                                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Description</p>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        <span className="font-semibold text-slate-700">{customer.name}</span> merupakan pelanggan dengan status member <span className="font-semibold text-slate-700">{currentLevel}</span> yang terdaftar aktif menggunakan email <span className="text-emerald-600 font-medium">{customer.email}</span>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* TABEL RIWAYAT TRANSAKSI */}
                        <div className="mt-10 pt-8 border-t border-slate-150">
                            <h3 className="text-base font-bold text-slate-800 mb-4">
                                Riwayat Transaksi ({customerOrders.length} Order)
                            </h3>

                            {customerOrders.length === 0 ? (
                                <p className="text-slate-400 text-sm italic bg-slate-50 p-4 rounded-xl text-center">
                                    Belum ada catatan transaksi untuk customer ini.
                                </p>
                            ) : (
                                <div className="space-y-3">
                                    {customerOrders.map((order, idx) => {
                                        const isCompleted = order.status === "Completed";
                                        return (
                                            <div
                                                key={order.orderId || idx}
                                                className="flex justify-between items-center bg-slate-50 hover:bg-slate-100/70 border border-slate-100 rounded-xl px-5 py-4 transition"
                                            >
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <p className="text-sm font-bold text-slate-700">
                                                            {order.orderId || `ORD-#${idx + 1}`}
                                                        </p>
                                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${order.status === "Completed" ? "bg-emerald-100 text-emerald-800" :
                                                                order.status === "Pending" ? "bg-amber-100 text-amber-800" : "bg-rose-100 text-rose-800"
                                                            }`}>
                                                            {order.status}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-slate-400">
                                                        {order.date || order.orderDate}
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm font-bold text-slate-800">
                                                        Rp {order.totalPrice.toLocaleString("id-ID")}
                                                    </p>
                                                    <p className={`text-xs font-semibold ${isCompleted ? "text-emerald-600" : "text-slate-400"}`}>
                                                        {isCompleted ? `+${calculatePointsFromOrder(order.totalPrice)} Poin` : "0 Poin"}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        {/* AKSI TOMBOL */}
                        <div className="flex gap-4 mt-8 pt-6 border-t border-slate-100">
                            <button className="flex-1 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition shadow-sm text-sm">
                                Edit Customer
                            </button>
                            <button className="flex-1 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-600 font-semibold transition text-sm">
                                Delete Customer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}