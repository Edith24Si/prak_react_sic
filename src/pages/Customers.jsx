import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import { customersData as initialData } from "../data/DataDummy";

export default function Customers() {
    const [customers, setCustomers] = useState(initialData); // State untuk daftar customer
    const [showForm, setShowForm] = useState(false);
    
    // State untuk Input Form
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        loyalty: "Bronze"
    });

    // Fungsi Tambah Customer
    const handleSave = (e) => {
        e.preventDefault();
        if(!formData.name || !formData.email) return alert("Nama dan Email wajib diisi!");

        const newCustomer = {
            id: `CUST-${String(customers.length + 1).padStart(3, '0')}`,
            ...formData
        };

        setCustomers([newCustomer, ...customers]); // Tambah ke paling atas
        setShowForm(false); // Tutup form
        setFormData({ name: "", email: "", phone: "", loyalty: "Bronze" }); // Reset form
    };

    return (
        <div className="flex flex-col gap-6 p-8 w-full">
            <PageHeader title="Customers" breadcrumb={["Dashboard", "Customers"]}>
                <button 
                    onClick={() => setShowForm(!showForm)}
                    className={`${showForm ? 'bg-red-500' : 'bg-hijau'} text-white px-6 py-2 rounded-xl transition-all shadow-md font-bold`}
                >
                    {showForm ? "Cancel" : "+ Add Customer"}
                </button>
            </PageHeader>

            {/* FORM TAMBAH CUSTOMER */}
            {showForm && (
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 animate-in fade-in zoom-in duration-300">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Create New Profile</h2>
                    <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-600">Full Name</label>
                            <input 
                                type="text" 
                                placeholder="e.g. Edith Helena"
                                className="bg-gray-50 border-none p-3 rounded-xl outline-none focus:ring-2 focus:ring-hijau"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-600">Email Address</label>
                            <input 
                                type="email" 
                                placeholder="example@mail.com"
                                className="bg-gray-50 border-none p-3 rounded-xl outline-none focus:ring-2 focus:ring-hijau"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-600">Phone Number</label>
                            <input 
                                type="text" 
                                placeholder="0812..."
                                className="bg-gray-50 border-none p-3 rounded-xl outline-none focus:ring-2 focus:ring-hijau"
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-600">Loyalty Level</label>
                            <select 
                                className="bg-gray-50 border-none p-3 rounded-xl outline-none focus:ring-2 focus:ring-hijau"
                                value={formData.loyalty}
                                onChange={(e) => setFormData({...formData, loyalty: e.target.value})}
                            >
                                <option value="Gold">Gold</option>
                                <option value="Silver">Silver</option>
                                <option value="Bronze">Bronze</option>
                            </select>
                        </div>
                        <button type="submit" className="md:col-span-2 bg-hijau text-white p-4 rounded-xl font-bold shadow-lg hover:scale-[1.02] transition-transform">
                            Save Customer Profile
                        </button>
                    </form>
                </div>
            )}

            {/* LIST CUSTOMER (CARD GRID) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {customers.map((cust) => (
                    <div key={cust.id} className="bg-white rounded-3xl p-6 flex flex-col items-center text-center shadow-sm border border-gray-50 hover:shadow-xl hover:-translate-y-1 transition-all group">
                        <div className="w-20 h-20 rounded-2xl mb-4 overflow-hidden bg-green-50 flex items-center justify-center border-4 border-white shadow-md">
                            <img 
                                src={`https://ui-avatars.com/api/?name=${cust.name}&background=00B074&color=fff&bold=true`} 
                                alt={cust.name} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="font-extrabold text-gray-800 text-lg group-hover:text-hijau transition-colors">{cust.name}</h3>
                        <p className="text-gray-400 text-xs mb-4">{cust.email}</p>
                        
                        <div className="w-full pt-4 border-t border-gray-50 flex justify-between items-center mt-auto">
                            <span className="text-[10px] font-bold text-gray-300 uppercase">{cust.id}</span>
                            <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider
                                ${cust.loyalty === 'Gold' ? 'bg-yellow-100 text-yellow-600' : 
                                  cust.loyalty === 'Silver' ? 'bg-gray-100 text-gray-500' : 
                                  'bg-orange-100 text-orange-600'}`}>
                                {cust.loyalty}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}