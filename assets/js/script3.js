const correctUsername = "skartivpn";
const correctPassword = "konoha";

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === correctUsername && password === correctPassword) {
        alert("Login berhasil!");
        window.location.href = "dash.html";
    } else {
        alert("Web aja nolak apalagi cewek, Silakan coba lagi.");
    }
}
