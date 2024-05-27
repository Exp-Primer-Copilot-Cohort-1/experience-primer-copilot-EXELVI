// Create web server
// Create a route for comments
// Send back the comments in JSON format
// Start the server
// Visit localhost:3000/comments in your browser

const express = require('express');
const app = express();

const comments = [
  { username: 'Tammy', comment: 'lolol' },
  { username: 'Jimmy', comment: 'lmao' },
  { username: 'Timmy', comment: 'rofl' },
  { username: 'Jamie', comment: 'haha' },
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});