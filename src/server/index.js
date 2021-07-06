const path = require('path');

const express = require('express');

const app = express();

const port = 3000;

// Point static path to dist
app.use(express.static('dist'));

// Serve index.html for all routes
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
