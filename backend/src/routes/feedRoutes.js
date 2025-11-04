const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.send('rota feed funcionando');
});

module.exports = router;