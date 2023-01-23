function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        window.location.href = "index.html";
    } else {
        alert("Try again");
    }
}

document.getElementById("loginData").addEventListener("click", login);