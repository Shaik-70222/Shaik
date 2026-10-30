/* ==========================================
   GET LOGIN FORM
========================================== */

document.getElementById("loginForm").addEventListener("submit", function (e) {

    e.preventDefault();

    /* ==========================================
       GET USER INPUT
    ========================================== */

    const username = document.getElementById("loginUsername").value.trim();

    const password = document.getElementById("loginPassword").value;

    const message = document.getElementById("loginMessage");

    /* ==========================================
       GET STORED USERS
    ========================================== */

    const users = JSON.parse(localStorage.getItem("users")) || {};

    /* ==========================================
       LOGIN VALIDATION
    ========================================== */

    if (users[username] && users[username].password === password) {

        localStorage.setItem("currentUser", username);

        window.location.href = "dashboard.html";

    } else {

        message.textContent = "Invalid username or password.";

    }

});