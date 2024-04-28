document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const logoutButton = document.getElementById('logoutButton');
    const loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Here you would typically make an AJAX request to your server to authenticate the user
        // For this example, let's assume the username is "admin" and password is "password"
        if (username === 'admin' && password === 'password') {
            loginMessage.textContent = 'Login successful!';
            loginForm.reset();
            loginForm.style.display = 'none';
            logoutButton.style.display = 'inline-block';
        } else {
            loginMessage.textContent = 'Invalid username or password';
        }
    });

    logoutButton.addEventListener('click', function() {
        // Perform logout actions here, such as clearing session data
        // For this simple example, we'll just reload the page to simulate logout
        location.reload();
    });
});
