import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import { ordersData as initialData } from "../data/DataDummy";

export default function Orders() {
    // State untuk menyimpan daftar order
    const [orders, setOrders] = useState(initialData);
    const [showForm, setShowForm] = useState(false);

    // State untuk menangkap inputan form
    const [formData, setFormData] = useState({
        customerName: "",
        totalPrice: "",
        orderDate: "",
        status: "Pending"
    });

    // Fungsi untuk menyimpan order baru
    const handleSave = (e) => {
        e.preventDefault(); // Mencegah halaman refresh saat tombol ditekan
        
        if (!formData.customerName || !formData.totalPrice) {
            return alert("Nama Customer dan Total Harga wajib diisi!");
        }

        // Membuat objek order baru
        const newOrder = {
            orderId: `ORD-${String(orders.length + 1).padStart(3, '0')}`,
            customerName: formData.customerName,
            totalPrice: parseInt(formData.totalPrice) || 0,
            orderDate: formData.orderDate || new Date().toISOString().split('T')[0], // Jika kosong, pakai tanggal hari ini
            status: formData.status
        };

        // Memasukkan order baru ke paling atas daftar
        setOrders([newOrder, ...orders]);
        
        // Menutup form dan mereset isiannya
        setShowForm(false);
        setFormData({ customerName: "", totalPrice: "", orderDate: "", status: "Pending" });
    };

    return (
        <div className="flex flex-col gap-6 p-8 w-full">
            <PageHeader title="Orders" breadcrumb={["Dashboard", "Orders"]}>
                <button 
                    onClick={() => setShowForm(!showForm)}
                    className={`${showForm ? 'bg-red-500' : 'bg-hijau'} text-white px-6 py-2 rounded-xl transition-all shadow-md font-bold`}
                >
                    {showForm ? "Cancel" : "+ Add Order"}
                </button>
            </PageHeader>

            {/* FORM ADD ORDER */}
            {showForm && (
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 animate-in fade-in zoom-in duration-300">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Create New Order</h2>
                    <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-600">Customer Name</label>
                            <input 
                                type="text" 
                                placeholder="e.g. Budi Santoso" 
                                className="bg-gray-50 border-none p-3 rounded-xl outline-none focus:ring-2 focus:ring-hijau"
                                value={formData.customerName}
                                onChange={(e) => setFormData({...formData, customerName: e.target.value})}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-600">Total Price (Rp)</label>
                            <input 
                                type="number" 
                                placeholder="e.g. 150000" 
                                className="bg-gray-50 border-none p-3 rounded-xl outline-none focus:ring-2 focus:ring-hijau"
                                value={formData.totalPrice}
                                onChange={(e) => setFormData({...formData, totalPrice: e.target.value})}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-600">Order Date</label>
                            <input 
                                type="date" 
                                className="bg-gray-50 border-none p-3 rounded-xl outline-none focus:ring-2 focus:ring-hijau"
                                value={formData.orderDate}
                                onChange={(e) => setFormData({...formData, orderDate: e.target.value})}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-600">Status</label>
                            <select 
                                className="bg-gray-50 border-none p-3 rounded-xl outline-none focus:ring-2 focus:ring-hijau"
                                value={formData.status}
                                onChange={(e) => setFormData({...formData, status: e.target.value})}
                            >
                                <option value="Pending">Pending</option>
                                <option value="Completed">Completed</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                        </div>
                        <button type="submit" className="md:col-span-2 bg-hijau text-white p-4 rounded-xl font-bold shadow-lg hover:scale-[1.02] transition-transform">
                            Save Order
                        </button>
                    </form>
                </div>
            )}

            {/* TABLE ORDERS */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Order ID</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Customer Name</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Total Price</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {/* Memanggil data dari state 'orders', bukan dari data dummy statis */}
                            {orders.map((order) => (
                                <tr key={order.orderId} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-bold text-gray-700">{order.orderId}</td>
                                    <td className="px-6 py-4 font-semibold text-gray-800">{order.customerName}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide 
                                            ${order.status === 'Completed' ? 'bg-green-100 text-green-600' : 
                                              order.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' : 
                                              'bg-red-100 text-red-600'}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-600">Rp {order.totalPrice.toLocaleString('id-ID')}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{order.orderDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}