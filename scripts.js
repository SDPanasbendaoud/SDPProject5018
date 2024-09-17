function showSection(sectionId) {
    // Hide all sections
    const sections = document.getElementsByClassName('content-section');
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    const users = [
        { username: 'Arfan', password: '12345' },
        { username: 'Ahmed', password: '12345' },
        { username: 'Anas', password: '12345' }
    ];

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        sessionStorage.setItem('username', username);
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
        alert('Invalid credentials, please try again.');
    }
}

// Logout function
function logout() {
    sessionStorage.removeItem('username');
    window.location.href = 'index.html'; // Redirect to login page
}

// Check login status
function checkLogin() {
    const username = sessionStorage.getItem('username');
    if (!username) {
        window.location.href = 'index.html'; // Redirect to login if not logged in
    } else {
        document.getElementById('welcome-msg').textContent = `Welcome, ${username}!`;
    }
}

// add employee
function addEmployee(event) {
    event.preventDefault(); // Prevent the form from submitting the usual way

    // Get form values
    const name = document.getElementById('name').value;
    const startDate = document.getElementById('start-date').value;
    const dob = document.getElementById('dob').value;
    const position = document.getElementById('position').value;
    const permissions = document.getElementById('permissions').value;

    // Create a new row in the employee table
    const employeeTable = document.getElementById('employee-table').querySelector('tbody');
    const newRow = employeeTable.insertRow();

    // Insert new cells (columns) into the row
    const nameCell = newRow.insertCell(0);
    const startDateCell = newRow.insertCell(1);
    const dobCell = newRow.insertCell(2);
    const positionCell = newRow.insertCell(3);
    const permissionsCell = newRow.insertCell(4);

    // Add the form values to the respective cells
    nameCell.textContent = name;
    startDateCell.textContent = startDate;
    dobCell.textContent = dob;
    positionCell.textContent = position;
    permissionsCell.textContent = permissions;

    // Clear the form after submission
    document.getElementById('employee-form').reset();
}

