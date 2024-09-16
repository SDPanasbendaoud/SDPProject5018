// Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username === 'Arfan' && password === '12345') {
        window.location.href = 'dashboard.html'; // Redirect to dashboard
        
   } if (username === 'Ahmed' && password === '12345') {
        window.location.href = 'dashboard.html'; // Redirect to dashboard
        
   } if (username === 'Anas' && password === '12345') {
        window.location.href = 'dashboard.html'; // Redirect to dashboard

    } else {
        alert('Invalid credentials, please try again.');
    }
}

// Logout function
function logout() {
    window.location.href = 'index.html'; // Redirect to login page
}
