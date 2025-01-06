
    function login() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Verifikasi username dan password
        if (username === "skartivpn" && password === "konoha") {
            // Simpan status login di sessionStorage
            sessionStorage.setItem("loggedIn", "true");

            // Redirect ke halaman dashboard
            window.location.href = "dash.html";
        } else {
            alert("Username atau password salah!");
        }
    }
