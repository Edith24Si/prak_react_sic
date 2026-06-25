// Daftar level membership beserta syarat minimal poin dan diskonnya
export const LOYALTY_LEVELS = [
    { level: "Platinum", minPoints: 600, discount: 0.15 },
    { level: "Gold", minPoints: 300, discount: 0.10 },
    { level: "Silver", minPoints: 100, discount: 0.05 },
    { level: "Bronze", minPoints: 0, discount: 0 },
];

/**
 * Menentukan level membership berdasarkan total poin.
 * @param {number} points - total poin customer
 * @returns {string} nama level (Bronze/Silver/Gold/Platinum)
 */
export function getLevelFromPoints(points) {
    const found = LOYALTY_LEVELS.find((lvl) => points >= lvl.minPoints);
    return found ? found.level : "Bronze";
}

/**
 * Menghitung poin yang didapat dari satu transaksi.
 * Rumus: 1 poin per Rp10.000
 * @param {number} totalPrice - total harga order
 * @returns {number} jumlah poin yang dihasilkan
 */
export function calculatePointsFromOrder(totalPrice) {
    if (!totalPrice || totalPrice <= 0) return 0;
    return Math.floor(totalPrice / 10000);
}

/**
 * Mengambil persentase diskon berdasarkan nama level.
 * @param {string} level - nama level (Bronze/Silver/Gold/Platinum)
 * @returns {number} persentase diskon (contoh: 0.10 = 10%)
 */
export function getDiscountFromLevel(level) {
    const found = LOYALTY_LEVELS.find((lvl) => lvl.level === level);
    return found ? found.discount : 0;
}