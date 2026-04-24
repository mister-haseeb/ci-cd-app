const express = require('express');

const app = express();

console.log("Dev version");

app.get('/', (req, res) => {
  res.send('Hello, From CI/CD Pipeline!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});