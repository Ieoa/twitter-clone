const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('rota do usuário está funcionando!!!!');
});

router.post('/', (req, res) => {
    const { message } = req.body;
    res.send(`Usuário recebido: ${message}`);
});


module.exports = router;