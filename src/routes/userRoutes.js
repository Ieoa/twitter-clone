const express = require('express');
const router = express.Router();


router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '123') {
        res.status(200).json({ message: 'Login bem-sucedido' });
    } else {
        res.status(401).json({ message: 'Credenciais inválidas' });
    }
});

router.get('/', (req, res) => {
    res.send('rota do usuário está funcionando!!!!');
});

router.post('/', (req, res) => {
    const { message } = req.body;
    res.send(`Usuário recebido: ${message}`);
});


module.exports = router;