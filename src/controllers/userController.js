const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
        'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
        [username, email, hashedPassword]
    );

    res.json(result.rows[0]);
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await pool.query(
        'SELECT * FROM users WHERE username = $1',
        [username]);

    if (!user.rows.length) return res.status(400).json({ error: 'Usuario Invalido' });


    const valid = await bcrypt.compare(password, user.rows[0].password);
    if (!valid) return res.status(400).json({ error: 'Senha Invalida' });

    const token = jwt.sign({ id: user.rows[0].id }, 'segredo', { expiresIn: '1h' });
    res.json({ token });
};