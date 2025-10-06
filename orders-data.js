// orders-data.js - Orders Database File
// This file stores all order data

// Global orders array
let ordersDatabase = [];

// Function to add new order
function addOrder(orderData) {
    ordersDatabase.push(orderData);
    console.log('✅ Order added to database:', orderData);
    return true;
}

// Function to get all orders
function getAllOrders() {
    return ordersDatabase;
}

// Function to get orders by status
function getOrdersByStatus(status) {
    if (status === 'all') {
        return ordersDatabase;
    }
    return ordersDatabase.filter(order => order.status === status);
}

// Function to update order status
function updateOrderStatus(orderId, newStatus) {
    const order = ordersDatabase.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        console.log(`✅ Order ${orderId} status updated to: ${newStatus}`);
        return true;
    }
    return false;
}

// Function to delete order
function deleteOrderById(orderId) {
    const index = ordersDatabase.findIndex(o => o.id === orderId);
    if (index !== -1) {
        ordersDatabase.splice(index, 1);
        console.log(`✅ Order ${orderId} deleted`);
        return true;
    }
    return false;
}

// Function to get order by ID
function getOrderById(orderId) {
    return ordersDatabase.find(o => o.id === orderId);
}

// Function to get orders count by status
function getOrdersCount() {
    return {
        all: ordersDatabase.length,
        pending: ordersDatabase.filter(o => o.status === 'pending').length,
        processing: ordersDatabase.filter(o => o.status === 'processing').length,
        shipped: ordersDatabase.filter(o => o.status === 'shipped').length,
        delivered: ordersDatabase.filter(o => o.status === 'delivered').length,
        completed: ordersDatabase.filter(o => o.status === 'completed').length,
        cancelled: ordersDatabase.filter(o => o.status === 'cancelled').length
    };
}

// Initialize with sample orders (for demo - remove in production)
function initializeSampleOrders() {
    if (ordersDatabase.length === 0) {
        ordersDatabase = [
            {
                id: 'ORD-' + (Date.now() - 86400000),
                date: new Date(Date.now() - 86400000).toLocaleString(),
                status: 'pending',
                items: [
                    { id: 1, name: 'Chocolate Cookies', price: 5.99, emoji: '🍪', category: 'Biscuits', quantity: 2 },
                    { id: 2, name: 'Toffee Pack', price: 3.99, emoji: '🍬', category: 'Toffees', quantity: 3 }
                ],
                customer: {
                    name: 'Ahmed Khan',
                    phone: '+92 300 1234567',
                    email: 'ahmed@example.com',
                    address: 'House #123, Block A, Gulshan-e-Iqbal, Karachi',
                    notes: 'Please call before delivery'
                },
                subtotal: 23.91,
                shipping: 0,
                total: 23.91
            },
            {
                id: 'ORD-' + (Date.now() - 172800000),
                date: new Date(Date.now() - 172800000).toLocaleString(),
                status: 'processing',
                items: [
                    { id: 3, name: 'Cola Drink', price: 2.50, emoji: '🥤', category: 'Drinks', quantity: 4 },
                    { id: 4, name: 'Potato Chips', price: 4.50, emoji: '🍟', category: 'Snacks', quantity: 2 }
                ],
                customer: {
                    name: 'Fatima Ali',
                    phone: '+92 301 9876543',
                    email: 'fatima@example.com',
                    address: 'Flat 5B, Defence Phase 2, Karachi',
                    notes: 'Ring the bell twice'
                },
                subtotal: 19.00,
                shipping: 0,
                total: 19.00
            },
            {
                id: 'ORD-' + (Date.now() - 259200000),
                date: new Date(Date.now() - 259200000).toLocaleString(),
                status: 'delivered',
                items: [
                    { id: 5, name: 'Vanilla Wafers', price: 6.50, emoji: '🥨', category: 'Biscuits', quantity: 1 }
                ],
                customer: {
                    name: 'Bilal Hassan',
                    phone: '+92 333 5555555',
                    email: 'bilal@example.com',
                    address: 'Shop #45, Tariq Road, Karachi',
                    notes: 'Leave at reception'
                },
                subtotal: 6.50,
                shipping: 0,
                total: 6.50
            }
        ];
        console.log('📦 Sample orders initialized:', ordersDatabase.length, 'orders');
    }
}

// Auto-initialize sample orders
initializeSampleOrders();

// Export functions for use in other files (Node.js compatibility)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ordersDatabase,
        addOrder,
        getAllOrders,
        getOrdersByStatus,
        updateOrderStatus,
        deleteOrderById,
        getOrderById,
        getOrdersCount
    };
}