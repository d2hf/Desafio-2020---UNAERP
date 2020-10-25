const logInHandler = e => {
    e.preventDefault();
    window.location.replace("/dashboard.html");
}
document.getElementById('logInForm').addEventListener('submit', logInHandler);