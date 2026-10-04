const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// Health check
app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        service: "user-service"
    });
});

// Get users
app.get("/users", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Prayas",
            role: "DevOps Engineer"
        },
        {
            id: 2,
            name: "Rahul",
            role: "Developer"
        }
    ]);
});

// Get user by ID
app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id);

    res.json({
        id: id,
        name: "Prayas",
        role: "DevOps Engineer"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`User service running on port ${PORT}`);
});