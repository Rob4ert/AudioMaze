import React from "react";
import "./Container.css"
import Podcast from "./Podcast";
import Welcome from "./Welcome";
import Ranking from "./Ranking";
import { useEffect, useState } from "react";
import Buttons from "./Buttons";
// import getPodcasts from "../ApiService"



export default function Container({after}) {



  return (
    <div className="main"> 
    {after? (<Welcome />) : (<Ranking />)}
    {/* <Welcome /> */}
    </div>
  )
}