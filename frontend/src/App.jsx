import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from './pages/Feed';
import Login from './pages/Login';
import '.styles\App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Feed" element={<Feed />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

