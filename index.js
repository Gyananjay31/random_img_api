const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Random Image API!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


app.get('/api/image/random', (req, res) => {
  const width = 400;
  const height = 300;

  // Picsum image URL (can be randomized)
//   const imageUrl = `https://picsum.photos/${width}/${height}?random=${Math.floor(Math.random() * 1000)}`;
  const imageUrl = `https://source.unsplash.com/random/400x300/${width}/${height}?random=${Math.floor(Math.random() * 1000)}`;

  res.json({ image: imageUrl });
});
