const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static("public"));

const userRoutes = require('./routes/userRoutes.js');
const postRoutes = require('./routes/postRoutes.js');

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));