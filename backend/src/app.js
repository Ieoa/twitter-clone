// backend/src/app.js
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const feedRoutes = require('./routes/feedRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/feed', feedRoutes);
app.use('/api/posts', postRoutes);

app.use('/api', userRoutes);

module.exports = app;
