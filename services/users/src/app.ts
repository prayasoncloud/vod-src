import express from "express";

const app = express();

app.use(express.json());

const users = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav@example.com",
    subscription: "premium",
    status: "active",
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya@example.com",
    subscription: "standard",
    status: "active",
  },
];

app.get("/health", (_req, res) => {
  res.json({
    status: "healthy",
    service: "users-service",
  });
});

app.get("/users", (_req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const user = users.find(
    (u) => u.id === Number(req.params.id)
  );

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  return res.json(user);
});

export default app;