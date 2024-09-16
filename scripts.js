// Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username === 'admin' && password === 'password123') {
        alert('Login Successful!');
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
        alert('Invalid credentials, please try again.');
    }
}

// Logout function
function logout() {
    alert('Logged out successfully.');
    window.location.href = 'login.html'; // Redirect to login page
}
