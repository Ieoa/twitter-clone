const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const feedRoutes = require('./routes/feedRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/users', userRoutes);
app.use('/api/feed', feedRoutes);
app.use('/api/posts', postRoutes);

module.exports = app;
