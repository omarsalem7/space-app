import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchRocketsDispatch } from './redux/rockets/rockets';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Rockets from './components/rockets/Rockets';
import Missions from './components/missions/Missions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRocketsDispatch());
  }, []);
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/" element={<Rockets />} />
          <Route exact path="/missions" element={<Missions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
