/* ==========================================
   GET REGISTRATION FORM
========================================== */

document.getElementById("registerForm").addEventListener("submit", function (e) {

    e.preventDefault();

    /* ==========================================
       GET USER INPUT
    ========================================== */

    const username = document.getElementById("username").value.trim();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    const confirmPassword = document.getElementById("confirmPassword").value;

    const message = document.getElementById("message");

    /* ==========================================
       CHECK PASSWORD
    ========================================== */

    if (password !== confirmPassword) {

        message.textContent = "Passwords do not match.";

        return;

    }

    /* ==========================================
       GET EXISTING USERS
    ========================================== */

    let users = JSON.parse(localStorage.getItem("users")) || {};

    /* ==========================================
       CHECK USER EXISTS
    ========================================== */

    if (users[username]) {

        message.textContent = "Username already exists.";

        return;

    }

    /* ==========================================
       STORE NEW USER
    ========================================== */

    users[username] = {

        email: email,

        password: password

    };

    localStorage.setItem("users", JSON.stringify(users));

    /* ==========================================
       SUCCESS MESSAGE
    ========================================== */

    alert("Registration Successful");

    window.location.href = "login.html";

});