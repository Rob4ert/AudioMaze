import React, {useState} from "react";
import "./Container.css";


export default function Player({title, id, setPlayer}) {
  
  const play = () => {
    setPlayer(id)
  }

  return (
  <li><a className="clickId" onClick={play}>{title}</a></li>
    
  )}
 



  