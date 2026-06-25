import ProductData from "../data/Products.json";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function Products() {
    const formatPrice = (price) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(price);
    };
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                {/* HEADER */}
                <div className="px-8 py-6 border-b border-gray-200 bg-gradient-to-r from-indigo-600 to-purple-600">
                    <h1 className="text-3xl font-bold text-white">
                        Product Management
                    </h1>
                    <p className="text-indigo-100 mt-1 text-sm">
                        List semua produk yang tersedia
                    </p>
                </div>
                {/* TABLE */}
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-900 text-white uppercase text-xs tracking-wider">
                            <tr>
                                <th className="px-6 py-4">Code</th>
                                <th className="px-6 py-4">Product</th>
                                <th className="px-6 py-4">Category</th>
                                <th className="px-6 py-4">Brand</th>
                                <th className="px-6 py-4">Price</th>
                                <th className="px-6 py-4">Stock</th>
                                <th className="px-6 py-4 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ProductData.map((item, index) => (
                                <tr
                                    key={item.key}
                                    className={`
                                        border-b border-gray-100
                                        hover:bg-indigo-50
                                        transition-colors
                                        duration-200
                                        ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                                    `}
                                >
                                    {/* CODE */}
                                    <td className="px-6 py-4 font-semibold text-gray-700">
                                        {item.code}
                                    </td>
                                    {/* TITLE */}
                                    <td className="px-6 py-4">
                                        <div>
                                            <Link to={`/products/${item.id
                                            
                                            }`} className="text-emerald-400 hover:text-emerald-500">
                                                <h2 className="font-bold text-gray-900">
                                                    {item.title}
                                                </h2>
                                            </Link>
                                            <p className="text-xs text-gray-400 mt-1">
                                                Produk elektronik berkualitas
                                            </p>
                                        </div>
                                    </td>
                                    {/* CATEGORY */}
                                    <td className="px-6 py-4">
                                        <span className="
                                            px-3 py-1
                                            rounded-full
                                            text-xs
                                            font-semibold
                                            bg-indigo-100
                                            text-indigo-700
                                        ">
                                            {item.category}
                                        </span>
                                    </td>
                                    {/* BRAND */}
                                    <td className="px-6 py-4 text-gray-700 font-medium">
                                        {item.brand}
                                    </td>
                                    {/* PRICE */}
                                    <td className="px-6 py-4 font-bold text-green-600">
                                        {formatPrice(item.price)}
                                    </td>
                                    {/* STOCK */}
                                    <td className="px-6 py-4">
                                        <span
                                            className={`
                                                px-3 py-1 rounded-full text-xs font-bold
                                                ${item.stock > 20
                                                    ? "bg-green-100 text-green-700"
                                                    : item.stock > 10
                                                        ? "bg-yellow-100 text-yellow-700"
                                                        : "bg-red-100 text-red-700"
                                                }
                                            `}
                                        >
                                            {item.stock} pcs
                                        </span>
                                    </td>

                                    {/* ACTION */}
                                    <td className="px-6 py-4">
                                        <div className="flex justify-center gap-2">
                                            <button className="
                                                px-4 py-2
                                                rounded-lg
                                                bg-indigo-600
                                                hover:bg-indigo-700
                                                text-white
                                                text-xs
                                                font-semibold
                                                transition
                                            ">
                                                Edit
                                            </button>

                                            <button className="
                                                px-4 py-2
                                                rounded-lg
                                                bg-red-500
                                                hover:bg-red-600
                                                text-white
                                                text-xs
                                                font-semibold
                                                transition
                                            ">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}