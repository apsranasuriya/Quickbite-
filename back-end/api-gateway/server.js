const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/users', async (req, resp) => {
    const response = await axios.get('http://localhost:5001/users');
    resp.json(response?.data);
})

app.get('/order', async (req, resp) => {
    const response = await axios.get('http://localhost:5002/order');
    resp.json(response?.data);
})

app.listen(PORT, () => {
    console.log('User Service is running on port: '+ PORT);
})