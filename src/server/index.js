const path = require( 'path' );

const express = require('express');
const app = express();

const port = 3000;

// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist')));

// Serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});