import { useState } from "react";
import PageHeader from "../components/PageHeader";
import customersData from "../data/customersData.json";
import { Link } from "react-router-dom";

export default function Customers() {
    const [customers, setCustomers] = useState(customersData);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        id: customers.length + 1,
        name: "",
        email: "",
        phone: "",
        loyalty: "Bronze",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleAddCustomer = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.phone) {
            setCustomers([...customers, { ...formData, id: customers.length + 1 }]);
            setFormData({
                id: customers.length + 2,
                name: "",
                email: "",
                phone: "",
                loyalty: "Bronze",
            });
            setShowForm(false);
        }
    };

    const getLoyaltyBgColor = (loyalty) => {
        switch (loyalty) {
            case "Gold":
                return "bg-amber-400";
            case "Silver":
                return "bg-gray-300";
            case "Bronze":
                return "bg-orange-600";
            default:
                return "bg-gray-300";
        }
    };

    return (
        <div>
            <PageHeader 
                title="Customers" 
                breadcrumb={["Dashboard", "Customers"]}
            >
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="bg-emerald-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-emerald-600 transition"
                >
                    + Add Customer
                </button>
            </PageHeader>

            {/* Form Section */}
            {showForm && (
                <div className="bg-slate-100 p-5 m-5 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-5 text-slate-800">Add New Customer</h2>
                    <form onSubmit={handleAddCustomer} className="grid grid-cols-2 gap-5">
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold text-slate-600 text-sm">Customer Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter customer name"
                                className="px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold text-slate-600 text-sm">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter email address"
                                className="px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold text-slate-600 text-sm">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Enter phone number"
                                className="px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold text-slate-600 text-sm">Loyalty</label>
                            <select
                                name="loyalty"
                                value={formData.loyalty}
                                onChange={handleInputChange}
                                className="px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            >
                                <option value="Bronze">Bronze</option>
                                <option value="Silver">Silver</option>
                                <option value="Gold">Gold</option>
                            </select>
                        </div>

                        <div className="col-span-2 flex gap-3 justify-end">
                            <button type="submit" className="bg-emerald-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-emerald-600 transition">
                                Add Customer
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="bg-slate-200 text-slate-600 px-6 py-2 rounded-md font-semibold hover:bg-slate-300 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Table Section */}
            <div className="m-5 overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-slate-100 border-b-2 border-slate-200">
                            <th className="px-3 py-3 text-left font-semibold text-slate-600 text-sm">Customer ID</th>
                            <th className="px-3 py-3 text-left font-semibold text-slate-600 text-sm">Customer Name</th>
                            <th className="px-3 py-3 text-left font-semibold text-slate-600 text-sm">Email</th>
                            <th className="px-3 py-3 text-left font-semibold text-slate-600 text-sm">Phone</th>
                            <th className="px-3 py-3 text-left font-semibold text-slate-600 text-sm">Loyalty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer, index) => (
                            <tr key={index} className="border-b border-slate-200 hover:bg-slate-50 transition">
                                <td className="px-3 py-3 text-slate-800 text-sm">{customer.id}</td>
                                 <Link to={`/Customers/${customer.id}`} className="text-emerald-400 hover:text-emerald-500">
                                <td className="px-3 py-3 text-slate-800 text-sm">{customer.name}</td>
                                </Link>
                                <td className="px-3 py-3 text-slate-800 text-sm">{customer.email}</td>
                                <td className="px-3 py-3 text-slate-800 text-sm">{customer.phone}</td>
                                <td className="px-3 py-3 text-slate-800 text-sm">
                                    <span className={`${getLoyaltyBgColor(customer.loyalty)} text-white text-xs font-semibold px-3 py-1 rounded-full inline-block`}>
                                        {customer.loyalty}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}