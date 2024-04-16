import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './sidebar';
import Home from './pages/Home';
import Pulls from './pages/Pulls';
import GuildBattles from './pages/GuildBattles';
import Ranker from './pages/Ranker';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pulls" element={<Pulls />} />
          <Route path="/guild-battles" element={<GuildBattles />} />
          <Route path="/ranker" element={<Ranker />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
