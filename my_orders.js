// Simulated order data for demonstration
const orderData = [
    {
        orderNumber: "ORD12345",
        date: "2023-10-01",
        total: "$100",
    },
    {
        orderNumber: "ORD12346",
        date: "2023-10-05",
        total: "$75",
    },
    // Add more order data as needed
];

// Function to display order details
function displayOrders() {
    const orderList = document.querySelector(".order-list");

    orderData.forEach((order) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>Order Number:</strong> ${order.orderNumber}<br>
            <strong>Date:</strong> ${order.date}<br>
            <strong>Total:</strong> ${order.total}
        `;
        orderList.appendChild(listItem);
    });
}

// Add an event listener to display order details when the page loads
window.addEventListener("load", () => {
    displayOrders();
});
