const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

const users = [
    { id: 1, username: 'Piyumi', password: 'password123' }
];

const path = require('path');


// Middleware to serve static files
app.use(express.static('public'));  // 'public' is the folder that holds your HTML, CSS, and other assets

app.use(express.json())

// Get all users (for testing purposes)
app.get('/users', (req, resp) => {
    resp.json(users);
});

// Login route
app.post('/login', (req, resp) => {
    const { username, password } = req.body;

    // Simple validation (in real-world, check password securely)
    const user = users.find(u => u.username === username && u.password === password);

    
    if (user) {
        resp.json({ message: 'Login successful!', userId: user.id });
    } else {
        resp.status(401).json({ message: 'Invalid credentials!' });
    }

    // Serve login.html directly as a response to the POST request
    resp.sendFile(path.join(__dirname, 'public', 'login.html'));
});
app.listen(PORT, () => {
    console.log('User Service is running on port: ' + PORT);
});
