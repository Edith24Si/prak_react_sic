import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import { customersData } from "../data/DataDummy";

export default function Customers() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="flex flex-col gap-6 pb-8">
            <PageHeader 
                title="Customers" 
                breadcrumb={["Dashboard", "Customers"]}
            >
            
                {/* Tombol Add Customer dikirim sebagai children */}
                <button 
                    onClick={() => setShowForm(!showForm)}
                    className="bg-hijau text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity shadow-sm font-semibold"
                >
                    {showForm ? "Cancel" : "+ Add Customer"}
                </button>
            </PageHeader>

            {/* FORM ADD CUSTOMER */}
            {showForm && (
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mx-4">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Add New Customer</h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Customer ID" className="border border-gray-300 p-2 rounded-lg w-full outline-none focus:border-hijau" />
                        <input type="text" placeholder="Customer Name" className="border border-gray-300 p-2 rounded-lg w-full outline-none focus:border-hijau" />
                        <input type="email" placeholder="Email" className="border border-gray-300 p-2 rounded-lg w-full outline-none focus:border-hijau" />
                        <input type="text" placeholder="Phone" className="border border-gray-300 p-2 rounded-lg w-full outline-none focus:border-hijau" />
                        <select className="border border-gray-300 p-2 rounded-lg w-full outline-none focus:border-hijau">
                            <option value="">Select Loyalty</option>
                            <option value="Bronze">Bronze</option>
                            <option value="Silver">Silver</option>
                            <option value="Gold">Gold</option>
                        </select>
                        <div className="md:col-span-2 flex justify-end mt-2">
                            <button type="button" className="bg-hijau text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                                Save Customer
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* TABEL DATA CUSTOMER (30 Data) */}
            <div className="px-4 mt-2">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-50 text-gray-500 text-sm">
                                <tr>
                                    <th className="px-6 py-4 font-semibold">Customer ID</th>
                                    <th className="px-6 py-4 font-semibold">Name</th>
                                    <th className="px-6 py-4 font-semibold">Email</th>
                                    <th className="px-6 py-4 font-semibold">Phone</th>
                                    <th className="px-6 py-4 font-semibold">Loyalty</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {customersData.map((cust) => (
                                    <tr key={cust.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-700">{cust.id}</td>
                                        <td className="px-6 py-4 font-semibold text-gray-800">{cust.name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{cust.email}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{cust.phone}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide 
                                                ${cust.loyalty === 'Gold' ? 'bg-yellow-100 text-yellow-600' : 
                                                  cust.loyalty === 'Silver' ? 'bg-gray-200 text-gray-600' : 
                                                  'bg-orange-100 text-orange-600'}`}>
                                                {cust.loyalty}
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