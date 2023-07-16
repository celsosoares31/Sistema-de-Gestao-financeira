const express = require('express');
require('dotenv').config();

console.log(process.env);

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}! http://localhost:${process.env.PORT}`);
});
