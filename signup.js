function saveData() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    if (username !== "" && password !== "") {
        alert("Your account has been created and your login information has been saved to local storage.");
        window.location.href = "login.html";
    } else {
        alert("Please fill in all fields.");
    }
}

document.getElementById("saveData").addEventListener("click", saveData);

if (localStorage.getItem("username") && localStorage.getItem("password")) {
    window.location.replace("index.html");
}