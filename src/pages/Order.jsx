import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import { ordersData } from "../data/DataDummy";

export default function Orders() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="flex flex-col gap-6 pb-8">
            <PageHeader 
                title="Orders" 
                breadcrumb={["Dashboard", "Orders"]}
            
            >
                {/* Tombol Add Order dikirim sebagai children */}
                <button 
                    onClick={() => setShowForm(!showForm)}
                    className="bg-hijau text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity shadow-sm font-semibold"
                >
                    {showForm ? "Cancel" : "+ Add Order"}
                </button>
            </PageHeader>

            {/* FORM ADD ORDER */}
            {showForm && (
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mx-4">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Add New Order</h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Order ID" className="border border-gray-300 p-2 rounded-lg w-full outline-none focus:border-hijau" />
                        <input type="text" placeholder="Customer Name" className="border border-gray-300 p-2 rounded-lg w-full outline-none focus:border-hijau" />
                        <select className="border border-gray-300 p-2 rounded-lg w-full outline-none focus:border-hijau text-gray-600">
                            <option value="">Select Status</option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                        <input type="number" placeholder="Total Price (Rp)" className="border border-gray-300 p-2 rounded-lg w-full outline-none focus:border-hijau" />
                        <input type="date" className="border border-gray-300 p-2 rounded-lg w-full outline-none focus:border-hijau text-gray-600" />
                        
                        <div className="md:col-span-2 flex justify-end mt-2">
                            <button type="button" className="bg-hijau text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                                Save Order
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* TABEL DATA ORDER (30 Data) */}
            <div className="px-4 mt-2">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-50 text-gray-500 text-sm">
                                <tr>
                                    <th className="px-6 py-4 font-semibold">Order ID</th>
                                    <th className="px-6 py-4 font-semibold">Customer Name</th>
                                    <th className="px-6 py-4 font-semibold">Status</th>
                                    <th className="px-6 py-4 font-semibold">Total Price</th>
                                    <th className="px-6 py-4 font-semibold">Order Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {ordersData.map((order) => (
                                    <tr key={order.orderId} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-700">{order.orderId}</td>
                                        <td className="px-6 py-4 font-semibold text-gray-800">{order.customerName}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide 
                                                ${order.status === 'Completed' ? 'bg-green-100 text-green-600' : 
                                                  order.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' : 
                                                  'bg-red-100 text-red-600'}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">Rp {order.totalPrice.toLocaleString('id-ID')}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{order.orderDate}</td>
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