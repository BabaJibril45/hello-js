require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

app.use((req, res, next) => {
  console.log( `${req.method} ${req.url} - ${new Date()}`);
  next(); 
});


app.get('/', (req, res) => {
  res.send("My week 2 API!");
});

app.post('/user', (req, res) => {
  const { name, email } = req.body;


// Check for missing data (Return 400)
if (!name || !email) {
  return res.status(400).json({ error: "Missing required fields: name and email are required."});
}

res.send(`Hello, ${name}`);
});

app.get( '/user/:id', (req, res) => {
  const userId =req.params.id;
  res.send( `User ${userId} profile`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});