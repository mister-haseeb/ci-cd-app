const express = require("express");
const app = express();

console.log("Production Version");

app.get("/", (req, res) => {
  res.send("Hello, From CI/CD Pipeline!");
});

app.get("/status", (req, res) => {
  res.json({
    status: "OK",
    env: "production"
  });
});

app.get("/greet", (req, res) => {
  const name = req.query.name || "User";

  res.json({
    message: `Hello ${name}, welcome to CI/CD pipeline (PRODUCTION)`
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});