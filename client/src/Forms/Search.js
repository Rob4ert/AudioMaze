import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css"
import icon from "../Images/white.jpg"



export default function Search (props) {
  // const navigate = useNavigate();

// const [show, setShow] = useEffect(false)

// function handleNav() {
//   setShow(prev => {
//     prev = !prev
//   })

// }


// const taker = () => {
//   setShow(true)
//   if (show)
//   return navigate("/each");
//     };

  return (
  <div class="topnav">
  <input type="text" placeholder="Search.."></input>
  <div className="search-button"><img  className="search-image" src={icon} alt="seek" ></img></div>
</div>
        )
  }
// }
{/*  */}