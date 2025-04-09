require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/quickbite";
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the User Service!");
});

app.post('/api/register', (req, res) => {
    const { username, email, password } = req.body;
    console.log("User registered:", username, email);
    res.json({ message: "User registered successfully" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`User service running on port ${port}`));
