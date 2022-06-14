import React, { Component, useState } from "react"
import './App.css';
// import Container from "./Components/Container";
// import Podcast from "./Components/Podcast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Reset from "./Auth/Reset";
import Dashboard from "./Auth/Dashboard";

import logo from "./Images/patus.png"
import Buttons from "./Components/Buttons.js"
import Waveform from './Components/Waveform'
import Ranking from "./Components/Ranking";
import Welcome from "./Components/Welcome";
import Search from "./Forms/Search";
import Container from "./Components/Container";
import Podcast from "./Components/Podcast";


function App() {



  const welcome = (
    <Router>
      <Routes>
          <Route exact path="/dashboard" element={<Container/>} />
        </Routes>
      </Router>
  )
   const [after, setAfter] = useState(true)

  // function handleClick() {
  //   setAfter(prevState =>
  //     prevState = !prevState)
  //   }
  

  const [show, setShow] = useState(false)
  const toShow = 
  !show ?
  <div className="app">
  <Router>
  <Routes>
    <Route exact path="/" element={<Login />} />
    <Route exact path="/register" element={<Register />} />
    <Route exact path="/reset" element={<Reset />} />
    <Route exact path="/dashboard" element={<Dashboard/>} />
    <Route exact path="/profile" element={<Container after={after}/>} />
    <Route exact path="/each" element={<Podcast/>} />
  </Routes>
</Router> 
</div> :
<>
 <Router>
 <Routes>
     {/* <Route exact path="/profile" element={<Container after={after}/>} /> */}
   </Routes>
 </Router>
</>


  return (
    <div className="container">
    <div className="navbar">
      <div className="main-logo" ><img id="main-logo" src={logo} alt="main logo" onClick={console.log("HELLO")}>
        </img></div>
        <Buttons  setAfter={setAfter} after={after}/>
        <Search />
        </div>
        {toShow}
    </div>
  );
}

export default App;
