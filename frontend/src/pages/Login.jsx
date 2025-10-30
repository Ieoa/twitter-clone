import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        if (!username || !password) {
            setError('Preencha todos os campos');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                navigate('/feed');
            } else {
                setError('Usuário ou senha inválidos');
            }
        } catch (err) {
            setError('Erro ao conectar com o servidor');
        }
    };

    return (
        <div className="login-container">
            <h1>Bem-vindo ao Twitter Clone!</h1>
            <p>Esta é uma versão simplificada do Twitter.</p>

            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Entrar</button>
            </form>

            {error && <p className="error">{error}</p>}

            <span>
                Não tem cadastro? <a href="/register">Registrar</a>
            </span>
        </div>
    );
}

export default Login;
