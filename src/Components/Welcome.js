import React, {useState, useEffect} from "react";
import "./Container.css"
import Waveform from "./Waveform";
import lucky from "../Britney - Lucky.mp3"

export default function Welcome () {
  
  const [favs, setFavs] = useState([]);

     // /=============================================/ API
       const getFav =  async () => {
         const response = await fetch("http://localhost:3001/yours")
         const data = await response.json()
         setFavs(data)
     
       }
     
       const addFavs =
    favs.podcasts?.map((el) => {
      console.log(el)
      return (
        <li id="favs">
          <div id="logodiv"><a id="podId"><img id="logo" src={el.image} alt="poster" ></img></a></div>
          <div id="rank-place" ><a id="podId" ><p className="title-p">{[el.title]}</p></a></div>
          <div id="rating" ><div className="Fafa"><i class='fa fa-bookmark'></i></div></div>
        
        </li> 
      )})
    

    
  useEffect(() => {
    getFav()
  }, [])
     

  return (
    <>
    <div className="wilkomen"><h1 id="welcome-title">Jump back</h1></div>
    <div className="lastOne">
      <Waveform audio={lucky}/>
      <h2>Title: Episode</h2>
    </div>,
    <div className="favs"><h2>Your podcasts:</h2>
    <ul>
      {/* {addFavs} */}
    </ul>
    </div>
    </>
  )

}