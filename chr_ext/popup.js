document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const statusElement = document.getElementById('status');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the values of username and password from the form
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Make a POST request to your backend server's login endpoint
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, password: password })
        })
        .then(response => {
            if (response.ok) {
                return response.json(); // Parse response body as JSON
            } else {
                throw new Error('Login failed'); // Throw an error if login fails
            }
        })
        .then(data => {
            // Handle successful login
            console.log('Login successful:', data);
            statusElement.textContent = 'Login successful';
            // Optionally, perform additional actions after successful login
        })
        .catch(error => {
            // Handle login error
            console.error('Login failed:', error.message);
            statusElement.textContent = 'Login failed';
            // Optionally, display error message or perform other actions
        });
    });
});
