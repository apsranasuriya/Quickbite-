// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// app.use(express.json());
// app.use(cors());

// // MongoDB Connection
// const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/quickbite";
// mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("✅ Connected to MongoDB"))
//     .catch(err => console.error("❌ MongoDB connection error:", err));

// // Import Order Routes
// const orderRoutes = require("./routes/orderRoutes");
// app.use("/orders", orderRoutes);

// // Root Route
// app.get("/", (req, res) => {
//     res.send("🍔 Welcome to the Order Service!");
// });

// // Start Server
// const port = process.env.PORT || 5001;
// app.listen(port, () => console.log(`🚀 Order Service running on port ${port}`));


const express = require('express');
const app = express();
const PORT = process.env.PORT || 5002;

app.get('/order', (req, resp) => {
    resp.json([{id: 1, name: 'Laptop'}]);
})

app.listen(PORT, () => {
    console.log('Order Service is running on port: '+ PORT);
})