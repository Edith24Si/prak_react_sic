

// Generate 30 Data Customers
export const customersData = Array.from({ length: 30 }, (_, i) => ({
    id: `CUST-${String(i + 1).padStart(3, '0')}`,
    name: `Customer Name ${i + 1}`,
    email: `customer${i + 1}@example.com`,
    phone: `0812345678${String(i).padStart(2, '0')}`,
    loyalty: i % 3 === 0 ? "Gold" : i % 2 === 0 ? "Silver" : "Bronze"
}));

// Generate 30 Data Orders
export const ordersData = Array.from({ length: 30 }, (_, i) => {
    const statuses = ["Pending", "Completed", "Cancelled"];
    return {
        orderId: `ORD-${String(i + 1).padStart(3, '0')}`,
        customerName: `Customer Name ${Math.floor(Math.random() * 30) + 1}`,
        status: statuses[i % 3],
        totalPrice: (Math.floor(Math.random() * 50) + 10) * 10000,
        orderDate: `2026-04-${String((i % 28) + 1).padStart(2, '0')}`
    };
});