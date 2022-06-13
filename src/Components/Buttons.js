import react, { useState } from "react";
import "../App.css"
import Ranking from "./Ranking";
import Welcome from "./Welcome";

export default function Buttons({setAfter, after}) {



  // const [after, setAfter] = useState(true)

  function handleClick() {
    setAfter(prevState =>
      prevState = !prevState)
    }

   
  return (
    <div className="navbutt">
    <div id="butt" ><h1 id="buttD"  onClick={handleClick}>Discover</h1></div>
    <div id="butt"><h1 id="buttP" onClick={handleClick}>Profile</h1></div>
    </div>
  )
}