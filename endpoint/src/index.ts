import express from 'express';

const app = express();
const port = 3001; // Use a different port than your React app

app.get('/api', (req, res) => {
  res.send('Hello World from the backend!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
