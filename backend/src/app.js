const path = require('path');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/public"));

const userRoutes = require('./routes/userRoutes.js');
const postRoutes = require('./routes/postRoutes.js');


app.use('/users', userRoutes);
app.use('/posts', postRoutes);


const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../frontend/src/index.html'));
});


app.get('/feed', (req, res) => {
    res.sendFile(__dirname + '/public/feed.html');
});

app.listen(3000, () => console.log('Server rodando em 3000'));
