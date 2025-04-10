// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// app.use(express.json());
// app.use(cors());

// const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/quickbite";
// mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

// // Import the User model
// const User = require("./models/User");

// app.get("/", (req, res) => {
//     res.send("Welcome to the User Service!");
// });

// // Register User
// app.post("/api/register", (req, res) => {
//     const { name, email, password } = req.body;

//     const newUser = new User({
//         name,
//         email,
//         password,
//     });

//     newUser
//         .save()
//         .then(() => {
//             console.log("User registered:", name, email);
//             res.json({ message: "User registered successfully" });
//         })
//         .catch((err) => {
//             console.error("Error registering user:", err);
//             res.status(500).json({ error: "Failed to register user" });
//         });
// });

// // Get All Users
// app.get("/api/users", (req, res) => {
//     User.find()
//         .select('-password') // Exclude the password field from the response
//         .then((users) => {
//             res.json({ users });
//         })
//         .catch((err) => {
//             console.error("Error fetching users:", err);
//             res.status(500).json({ error: "Failed to fetch users" });
//         });
// });

// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`User service running on port ${port}`));


const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

app.get('/users', (req, resp) => {
    resp.json([{id: 1, name: 'Piyumi Ranasuriya'}]);
})

app.listen(PORT, () => {
    console.log('User Service is running on port: '+ PORT);
})