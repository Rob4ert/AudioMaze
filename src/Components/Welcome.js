import React from "react";
import "./Container.css"
import Waveform from "./Waveform";
import lucky from "../Britney - Lucky.mp3"

export default function Welcome () {
  

  return (
    <>
    <h1 id="welcome-title">Jump back</h1>
    <div className="lastOne">
      <Waveform audio={lucky}/>
      <h2>Title: Episode</h2>
    </div>,
    <div className="favs"><h2>Your podcasts:</h2>
    <ul>
      <li></li>
    </ul>
    </div>
    </>
  )

}