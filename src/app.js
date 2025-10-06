
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Login';
import feed from './components/feed';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/feed" element={<Feed />} />
            </Routes>
        </Router>
    );
}
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
app.use(express.json());
app.use(express.static(__dirname + "/public"));

const userRoutes = require('./routes/userRoutes.js');
const postRoutes = require('./routes/postRoutes.js');

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.listen(3000, () => console.log('Server rodando em 3000'));