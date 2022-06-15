import React, {useState, useEffect} from "react";
import "./Container.css"
import Waveform from "./Waveform";
import plato from "../Images/Plato's Cave.mp3"

export default function Welcome ({liked}) {
  
  const [last, setLast] = useState([]);
  const [play, setPlay] = useState(true)
  const [favs, setFavs] = useState([])
     // /=============================================/ API
       const getLast =  async () => {
         const response = await fetch("http://localhost:3001/yours")
         const data = await response.json()
         setLast(data)
       }


    const title = "Philosophy Bites: Simon Blackburn on Plato's Cave"
  useEffect(() => {
    getLast()
  }, [])
  const kot = "https://www.listennotes.com/e/p/11b34041e804491b9704d11f283c74de/"
  const pies ="https://content.libsyn.com/p/9/9/e/99ee53291e1afccb/WOTR_May_29_V2.mp3?c_id=128781989&cs_id=128781989&destination_id=298196&response-content-type=audio%2Fmpeg&Expires=1655205877&Signature=T8JItUZ3U8W1qqFe9n8WGAJUVDmjY3qofj3FFbkvbcLs1ccA8GbfBtGR840Mk6dmFNGmWKenvvI64uk0vPRtPWzFAgtwN2evc9lMxNUvZjwkU21~OMy8GrKuyG0fTyOvXrFfZ4cgrcW8pRDSNv7UkNGR1hJe-VlW5B8DeB-PZO~7Q-KybK8mMozkYabj-jPD2YuE7721pghP-1naP5vgSGv8CLwqvpWcm1GpWGGjYcSsgkEo-iJpaBXxI7jg8wPoyAgPQD2sPYO3h-nWDM8t494ubOCBUHVLQfPDYmBUnErCSEPkdj2VsCOLmH0CvUt4rfQDdjs5WQq3RLIFsQcCTw__&Key-Pair-Id=K1YS7LZGUP96OI"
  const mock2 = "Celebration Recap, Jason Fry and Christian Blauvelt Interviews – SWBW #101"
  const mocks2Audio = "https://www.listennotes.com/e/p/11b34041e804491b9704d11f283c74de/"

  function handlePlayer() {
    setPlay(prev => {
      prev = !prev
    })
  }

 

  const getFavs = async () => {
    const response = await fetch("http://localhost:3001/stored")
    const data = await response.json()
    setFavs(data)
    
  }

  console.log(liked)
  const addFavos =
    liked.map(el => {
      return (
        <li><a id="favslist">{el.name} </a></li>
      )
    })

  useEffect(() => {
    getFavs()
  }, [])

  return (
    <>
    <div className="wilkomen"><h1 id="welcome-title">Jump back</h1></div>
    <div className="lastOne">
      <Waveform audio={plato}/>
      <h2>{title}</h2>
    </div>,
    <div className="favs"><h2>Your podcasts:</h2>
    <ul className="bullets">
      <li><a id="favslist">{last.title}</a></li>
      {addFavos}
    </ul>
    </div>
    </>
  )

}