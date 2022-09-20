import React, { Component, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Reset from './Auth/Reset';
import Dashboard from './Auth/Dashboard';
import logo from './Images/maze.png';
import Buttons from './Components/Buttons';
import Ranking from './Components/Ranking';
import Welcome from './Components/Welcome';
import Search from './Forms/Search';
import Container from './Components/Container';
import Podcast from './Components/Podcast';

function App() {
  const welcome = (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Container />} />
      </Routes>
    </Router>
  );
  const [after, setAfter] = useState(true);

  const [cast, setCast] = useState(false);

  const [show, setShow] = useState(false);

  const toShowe = !cast ? <Container /> : <Podcast />;

  return (
    <Router>
      <div className="container">
        <div className="navbar">
          <div className="main-logo">
            <Link to="/dashboard">
              <img id="main-logo" src={logo} alt="main logo"></img>
            </Link>
          </div>

          <Buttons />
          <Search />
        </div>
        <div className="app">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/profile" element={<Welcome />} />
            <Route path="/each" element={<Podcast />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
