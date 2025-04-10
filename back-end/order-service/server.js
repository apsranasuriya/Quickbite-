const express = require('express');
const path = require('path');
const app = express();
const port = 5002;

// To parse JSON data from frontend
app.use(express.json());

// Serve static frontend files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// In-memory order "database"
let orders = [];

// POST: Add new order
app.post('/order', (req, res) => {
    const orderData = req.body;

    const newOrder = {
        id: orders.length + 1,
        name: orderData.name,
        email: orderData.email,
        phone: orderData.phone,
        address: orderData.address,
        items: orderData.items,
        payment: orderData.payment,
        delivery_time: orderData.delivery_time,
        special_instructions: orderData.special_instructions,
    };

    orders.push(newOrder);
    res.status(201).json(newOrder);
});

// GET: Retrieve all orders
app.get('/orders', (req, res) => {
    res.json(orders);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
