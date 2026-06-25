import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react"
import CustomerData from "../data/CustomersData.json"
import { ordersData } from "../data/DataDummy";
import { getLevelFromPoints, calculatePointsFromOrder } from "../lib/loyalty";

export default function CustomerDetail() {
    // useParam, digunakan untuk mengambil data yang dikirimkan dari Customers
    const { id } = useParams();
    const [customer, setCustomer] = useState(null);
    const [error, setError] = useState(null);
    // id yang didapatkan dari customer, dia akan mencari ke data Json yang kita punya
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
            case "Platinum":
                return "bg-slate-200 text-slate-700";
            case "Gold":
                return "bg-yellow-100 text-yellow-700";
            case "Silver":
                return "bg-gray-200 text-gray-700";
            case "Bronze":
                return "bg-orange-100 text-orange-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };
    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <p className="text-red-600 font-semibold">
                        {error}
                    </p>
                </div>
            </div>
        );
    }
    if (!customer) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-gray-600 text-lg">
                    Loading...
                </div>
            </div>
        );
    }

    // Riwayat order milik customer ini (hanya yang Completed)
    const customerOrders = ordersData.filter(
        (order) => order.customerName === customer.name && order.status === "Completed"
    );

    // Total poin dari seluruh order Completed
    const totalPoints = customerOrders.reduce(
        (total, order) => total + calculatePointsFromOrder(order.totalPrice),
        0
    );

    // Level otomatis berdasarkan total poin
    const currentLevel = getLevelFromPoints(totalPoints);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto">
                {/* BACK BUTTON */}
                <Link
                    to="/customers"
                    className="
                        inline-flex items-center
                        mb-6
                        text-indigo-600
                        hover:text-indigo-800
                        font-medium
                        transition
                    "
                >
                    ← Kembali ke Customers
                </Link>
                {/* CARD */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* HEADER */}
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            <div>
                                <p className="text-indigo-100 text-sm mb-2">
                                    Customer ID : #{customer.id}
                                </p>
                                <h1 className="text-3xl font-bold">
                                    {customer.name}
                                </h1>
                            </div>
                            <span
                                className={`
                                    px-4 py-2
                                    rounded-full
                                    text-sm
                                    font-bold
                                    ${loyaltyBadge(currentLevel)}
                                `}
                            >
                                {currentLevel} Member
                            </span>
                        </div>
                    </div>
                    {/* CONTENT */}
                    <div className="p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* LEFT */}
                            <div>
                                <div className="
                                    bg-gray-100
                                    rounded-2xl
                                    p-10
                                    flex
                                    items-center
                                    justify-center
                                    h-full
                                ">
                                    <div className="text-center">
                                        <div className="text-7xl mb-4">
                                            👤
                                        </div>
                                        <p className="text-gray-500 text-sm">
                                            Customer Profile
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* RIGHT */}
                            <div className="space-y-6">

                                {/* EMAIL */}
                                <div>

                                    <p className="text-sm text-gray-400 mb-1">
                                        Email
                                    </p>

                                    <h2 className="text-lg font-semibold text-gray-800">
                                        {customer.email}
                                    </h2>

                                </div>

                                {/* PHONE */}
                                <div>

                                    <p className="text-sm text-gray-400 mb-1">
                                        Phone Number
                                    </p>

                                    <h2 className="text-lg font-semibold text-gray-800">
                                        {customer.phone}
                                    </h2>

                                </div>

                                {/* LOYALTY */}
                                <div>

                                    <p className="text-sm text-gray-400 mb-2">
                                        Loyalty Status
                                    </p>

                                    <span
                                        className={`
                                            px-4 py-2
                                            rounded-full
                                            text-sm
                                            font-bold
                                            ${loyaltyBadge(currentLevel)}
                                        `}
                                    >
                                        {currentLevel}
                                    </span>

                                </div>

                                {/* TOTAL POINTS */}
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">
                                        Total Poin
                                    </p>
                                    <h2 className="text-lg font-semibold text-gray-800">
                                        {totalPoints} poin
                                    </h2>
                                </div>

                                {/* DESCRIPTION */}
                                <div>

                                    <p className="text-sm text-gray-400 mb-2">
                                        Description
                                    </p>

                                    <p className="text-gray-600 leading-relaxed">
                                        {customer.name} merupakan pelanggan dengan
                                        status member {currentLevel} yang
                                        terdaftar menggunakan email{" "}
                                        {customer.email}.
                                    </p>

                                </div>

                                {/* ORDER HISTORY */}
                                <div>
                                    <p className="text-sm text-gray-400 mb-2">
                                        Riwayat Transaksi (Completed)
                                    </p>
                                    {customerOrders.length === 0 ? (
                                        <p className="text-gray-500 text-sm italic">
                                            Belum ada transaksi yang selesai.
                                        </p>
                                    ) : (
                                        <div className="space-y-2">
                                            {customerOrders.map((order) => (
                                                <div
                                                    key={order.orderId}
                                                    className="flex justify-between items-center bg-gray-50 rounded-xl px-4 py-3"
                                                >
                                                    <div>
                                                        <p className="text-sm font-semibold text-gray-700">
                                                            {order.orderId}
                                                        </p>
                                                        <p className="text-xs text-gray-400">
                                                            {order.orderDate}
                                                        </p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-sm font-semibold text-gray-700">
                                                            Rp {order.totalPrice.toLocaleString("id-ID")}
                                                        </p>
                                                        <p className="text-xs text-emerald-600">
                                                            +{calculatePointsFromOrder(order.totalPrice)} poin
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* ACTION */}
                                <div className="flex gap-4 pt-4">

                                    <button
                                        className="
                                            flex-1
                                            py-3
                                            rounded-xl
                                            bg-indigo-600
                                            hover:bg-indigo-700
                                            text-white
                                            font-semibold
                                            transition
                                        "
                                    >
                                        Edit Customer
                                    </button>

                                    <button
                                        className="
                                            flex-1
                                            py-3
                                            rounded-xl
                                            bg-red-500
                                            hover:bg-red-600
                                            text-white
                                            font-semibold
                                            transition
                                        "
                                    >
                                        Delete Customer
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}