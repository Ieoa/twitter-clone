const pool = require('../config/db');

exports.createPost = async (req, res) => {
    const { content, user_id } = req.body;
    const result = await pool.query(
        "INSERT INTO posts (content, user_id) VALUES ($1, $2) RETURNING *",
        [content, user_id]
    );
    res.json(result.rows[0]);
};

exports.getPosts = async (req, res) => {
    const result = await pool.query("SELECT posts.id, content, username, posts.created_at Frp,om posts JOIN users ON posts.user_id = users.id ORDER BY posts.created_at DESC");
    res.json(result.rows);
};
