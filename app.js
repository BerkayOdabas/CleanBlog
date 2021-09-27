const express = require('express');
const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
  const blog = {
    id: 1,
    title: 'Blog Title',
    description: 'Blog description',
  };
  res.send(blog);
});

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda başladı...`);
});
