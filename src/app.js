const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
app.use(express.json());
app.use(express.static(__dirname + "/public"));

const userRoutes = require('./routes/userRoutes.js');
const postRoutes = require('./routes/postRoutes.js');

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));