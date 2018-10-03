function toggle(button) {
    var password = document.getElementById("login-password");
    if (password.type == "password") {
        button.innerHTML = "Hide";
        password.type = "text";
    }
    else {
        button.innerHTML = "Show";
        password.type = "password";
    }
}
