import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import DragonDetail from './pages/DragonDetail';
import Favorites from './pages/Favorites';
import { ProveedorFavoritos } from './context/FavoritesContext';

function App() {
  return (
    <ProveedorFavoritos>
      <Router>
        <div style={{ minHeight: '100vh', backgroundColor: '#f0f2f5', fontFamily: 'Arial, sans-serif' }}>
          <nav style={{ backgroundColor: '#333', padding: '15px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '20px', fontWeight: 'bold' }}>DragonDex</Link>
            <div>
              <Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>Inicio</Link>
              <Link to="/favoritos" style={{ color: 'white', textDecoration: 'none' }}>Favoritos</Link>
            </div>
          </nav>

          <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dragon/:nombre" element={<DragonDetail />} />
              <Route path="/favoritos" element={<Favorites />} />
            </Routes>
          </main>

          <footer style={{ textAlign: 'center', padding: '20px', marginTop: '50px', borderTop: '1px solid #ccc' }}>
            <p>Hola Mundo</p>
          </footer>
        </div>
      </Router>
    </ProveedorFavoritos>
  );
}

export default App;
