
import { useNavigate } from "react-router-dom";
import React from "react"
import "./Container.css"
import logo from "../Images/icon.jpg"
import Container from "./Container";
import { useEffect, useState } from "react";
// import getPodcasts from "../ApiService"
import "./Ranking.css"
import Sidemenu from "./Sidemenu";
import "./Sidemenu.css"
import Rating from "./Rating";
import Heart from "./Heart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Podcast from "./Podcast";

export default function Ranking(props) {


  const [show, setShow] = useState(false)


  const [podcasts, setPodcasts] = useState([]);

// /=============================================/ API
  const getPodcasts =  async () => {
    const response = await fetch("http://localhost:3001/mock")
    const data = await response.json()
    setPodcasts(data)

  }

  const navigate = useNavigate();

  const taker = () => {
    setShow(true)
    if (show)
    return navigate("/each");
      };

    const each = 
    <>
 <Router>
 <Routes>
     <Route exact path="/each" element={<Podcast/>} />
   </Routes>
 </Router>
</>

  let counter = 0;
  const addPodcast =
    podcasts.podcasts?.map((el) => {
      counter++;
      return (
        <li id="each">
          <p className="counter">{counter}</p>
          <div id="logodiv"><a id="podId"><img id="logo" src={el.image} alt="poster" onClick={taker}></img></a></div>
          <div id="rank-place" ><a id="podId"  onClick={taker}><p className="title-p">{[el.title]}</p></a></div>
          <div id="rating" ><div className="Fafa"><i class='fa fa-bookmark'></i></div></div>
        
        </li> 
      )})
    

    
  useEffect(() => {
    getPodcasts()
  }, [])

  
  return (
    <>
    <div id="discover-change"><Sidemenu /></div>
    
    <div id="rank">
      <h3 id="ranking-title">TRENDING</h3>
      <ul className="list">
      {addPodcast}
      </ul>
    </div>
    </>
  )
    }