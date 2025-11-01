const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === '1234') {
        return res.status(200).json({ success: true });
    }

    return res.status(401).json({ success: false, message: 'Credenciais inválidas' });
});

module.exports = router;
