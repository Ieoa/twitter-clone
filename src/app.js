const express = require('express');
const app = express();

// 1 Middlewares globais (devem vir antes das rotas)
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// 2 Importar rotas (antes de usar)
const userRoutes = require('./routes/userRoutes.js');
const postRoutes = require('./routes/postRoutes.js');

// 3 Usar as rotas
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

// 4 Rotas principais
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/feed', (req, res) => {
    res.sendFile(__dirname + '/public/feed.html');
});

// 5️ Iniciar o servidor
app.listen(3000, () => console.log('Server rodando em 3000'));
