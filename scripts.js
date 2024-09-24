// Function to show the selected section and hide others
function showSection(sectionId) {
    const sections = document.getElementsByClassName('content-section');
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    document.getElementById(sectionId).style.display = 'block';
}

// Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const users = [{ username: 'Anas', password: '12345' }];

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        sessionStorage.setItem('username', username);
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials, please try again.');
    }
}

// Logout function
function logout() {
    sessionStorage.removeItem('username');
    window.location.href = 'index.html';
}

// Check login status
function checkLogin() {
    const username = sessionStorage.getItem('username');
    if (!username) {
        window.location.href = 'index.html';
    } else {
        document.getElementById('welcome-msg').textContent = `Welcome, ${username}!`;
    }
}

// Add Employee Function (Simplified)
function addEmployee(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    // Further form handling logic
}
