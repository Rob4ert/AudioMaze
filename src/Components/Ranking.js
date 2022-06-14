
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

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Podcast from "./Podcast";
import heart from "../Images/heart.png"
import Meter from "./Meter";
import Stars from "./Rating";
import Fav from "./Favs";


export default function Ranking(props) {


  const [show, setShow] = useState(false)
  const [save, setSave] = useState([])
  const [styl, setStyl] = useState(true)
  const [podcasts, setPodcasts] = useState([]);

// /=============================================/ API
  const getPodcasts =  async () => {
    const response =  await fetch("http://localhost:3001/mock")
    const data = await response.json()
    console.log(data)
    setPodcasts(data)

  }

  // export default function getUser ()  {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };
  //   return fetch(URL,  options)
  //     .then((res) => res.json())
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };


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
          <div id="rating" ><div className="Fafa" ><Stars /><Fav liked={props.liked} setLiked={(i) => props.setLiked(i)} title={el.title} ids={el.id}/></div></div>
        
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