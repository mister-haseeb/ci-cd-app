const express = require('express');

const app = express();

console.log('Dev Version');

app.get("/status", (req, res) => {
  res.json({
    status: "OK",
    env: "dev"
  });
});
app.get('/', (req, res) => {
  res.send('Hello, From CI/CD Pipeline!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

