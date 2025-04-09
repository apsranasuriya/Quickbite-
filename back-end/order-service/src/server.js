require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/quickbite_orders";
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

// Order Routes
const orderRoutes = require("./routes/orderRoutes");
app.use("/orders", orderRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the Order Service!");
});

// Start the server
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Order Service running on port ${port}`));
