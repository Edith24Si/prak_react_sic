// Data nama diselaraskan dengan CustomersData.json agar relasi Order-Customer akurat
import customersData from "./CustomersData.json";

const realNames = customersData.map((c) => c.name);

export const ordersData = Array.from({ length: 30 }, (_, i) => ({
    orderId: `ORD-${String(i + 1).padStart(3, '0')}`,
    customerName: realNames[Math.floor(Math.random() * realNames.length)],
    status: ["Pending", "Completed", "Cancelled"][i % 3],
    totalPrice: (Math.floor(Math.random() * 50) + 10) * 10000,
    orderDate: `2026-04-${String((i % 28) + 1).padStart(2, '0')}`
}));