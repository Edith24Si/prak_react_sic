// Data Nama Realistis
const realNames = [
    "Edith Helena", "Rivo Santoso", "Siti Aminah", "Aris Setiawan", "Dewi Lestari",
    "Rian Hidayat", "Maya Putri", "Ahmad Fauzi", "Larasati", "Kevin Sanjaya",
    "Aditya Pratama", "Nadia Safira", "Dimas Anggara", "Fitriani", "Zulkhair"
];

// Generate 15 Data Customers Awal yang lebih rapi
export const customersData = realNames.map((name, i) => ({
    id: `CUST-${String(i + 1).padStart(3, '0')}`,
    name: name,
    email: `${name.toLowerCase().replace(/\s/g, '')}@mail.com`,
    phone: `0812${Math.floor(10000000 + Math.random() * 90000000)}`,
    loyalty: i % 3 === 0 ? "Gold" : i % 2 === 0 ? "Silver" : "Bronze"
}));

export const ordersData = Array.from({ length: 15 }, (_, i) => ({
    orderId: `ORD-${String(i + 1).padStart(3, '0')}`,
    customerName: realNames[Math.floor(Math.random() * realNames.length)],
    status: ["Pending", "Completed", "Cancelled"][i % 3],
    totalPrice: (Math.floor(Math.random() * 50) + 10) * 10000,
    orderDate: `2026-04-${String((i % 28) + 1).padStart(2, '0')}`
}));