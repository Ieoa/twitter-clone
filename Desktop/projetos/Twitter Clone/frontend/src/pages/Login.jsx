import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        try {
            // url do backend de login
            const res = await fetch("http://localhost:4000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: user, password: pass }),
            });
            if (!res.ok) {
                const err = await res.json();
                setError(err.message || "Erro no login");
                return;
            }
            const data = await res.json();
            localStorage.setItem("token", data.token);
            navigate("/feed");
        } catch (err) {
            setError("Erro de conexão com backend.");
            console.error(err);
        }
    }

    return (
        <div className="login-page">
            <form className="login-card" onSubmit={handleSubmit}>
                <h1>Entrar</h1>
                <input
                    placeholder="Usuário"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
                <input
                    placeholder="Senha"
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
                <button type="submit">Entrar</button>
                {error && <div className="error">{error}</div>}
                <div className="hint">use <b>admin</b> / <b>1234</b></div>
            </form>
        </div>
    );
}
