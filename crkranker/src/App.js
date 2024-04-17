import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './sidebar';
import Home from './pages/Home';
import Pulls from './pages/Pulls';
import GuildBattles from './pages/GuildBattles';
import Ranker from './pages/Ranker';
import Footer from './footer'; // Make sure the path is correct

function App() {
  return (
    <Router>
      <div className="App" style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}> {/* Main content area */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pulls" element={<Pulls />} />
            <Route path="/guild-battles" element={<GuildBattles />} />
            <Route path="/ranker" element={<Ranker />} />
          </Routes>
        </div>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
