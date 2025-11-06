const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 4000;

// login: aceita admin / 1234
app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "1234") {
        // token simples (não seguro, só demo)
        return res.json({ token: "dummy-token-admin" });
    }
    return res.status(401).json({ message: "Usuário ou senha inválidos" });
});

app.get("/api/tweets", (req, res) => {
    const tweets = [
        { id: 1, user: "alice", time: "1h", content: "Quero voltar ao Twitter antigo 😅" },
        { id: 2, user: "bob", time: "2h", content: "Aprendendo React + Node hoje!" },
        { id: 3, user: "carol", time: "3h", content: "Modo escuro sempre <3" },
        { id: 4, user: "dave", time: "Ontem", content: "Projeto simples e rápido — vamo codar!" }
    ];
    res.json(tweets);
});

app.listen(PORT, () => console.log(`Backend Node rodando na porta ${PORT}`));
