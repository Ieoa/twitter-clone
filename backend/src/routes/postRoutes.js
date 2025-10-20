const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.send('rota post funcionando');
});

module.exports = router;