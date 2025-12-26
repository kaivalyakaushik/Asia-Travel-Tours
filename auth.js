// auth.js – route protection

function requireLogin() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
    }
}

function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userEmail");
    window.location.href = "login.html";
}
