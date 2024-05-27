
const userData = {
    name: "Bhavya Rathore",
    email: "bhavyarathore1122@gmail.com",
};

function displayUserInfo() {
    const userName = document.getElementById("user-name");
    const userEmail = document.getElementById("user-email");

    userName.textContent = userData.name;
    userEmail.textContent = userData.email;
}

window.addEventListener("load", () => {
    displayUserInfo();
});


function navigateToMyOrders() {
    
    window.location.href = "my_orders.html";
}


function navigateToWishlist() {
    
    window.location.href = "wishlist.html";
}


function navigateToTrackMyOrder() {
    window.location.href = "track_my_order.html";
}
