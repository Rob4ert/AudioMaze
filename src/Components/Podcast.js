import React from "react";
import "./Container.css";
import { useEffect, useState } from "react";
import styled from 'styled-components';
import Waveform from './Waveform.js'
import Player from "./Player";
import Stars from "./Rating";

export default function Podcast() {

  const dummy = "I met a traveller from an antique land, Who said—Two vast and trunkless legs of stone Stand in the desert. . . . Near them, on the sand, Half sunk a shattered visage lies, whose frown, And wrinkled lip, and sneer of cold command, Tell that its sculptor well those passions read Which yet survive, stamped on these lifeless things, The hand that mocked them, and the heart that fed; And on the pedestal, these words appear: My name is Ozymandias, King of Kings; Look on my Works, ye Mighty, and despair! Nothing beside remains. Round the decay Of that colossal Wreck, boundless and bare The lone and level sands stretch far away."
  const [one, setEach] = useState([]);
const initial = 1
  const [current, setCurrent] = useState(initial)
  // /=============================================/ API
    const getEach =  async () => {
      const response = await fetch("http://localhost:3001/podcasts/93")
      const data = await response.json()
      setEach(data)
      console.log(data)
      return data
      
    
     }
     
  
     function setPlayer(episodes) {
     
      setCurrent(episodes)
      console.log(current)
    }



    function play () {
      console.log('play is working')
      const test = `https://www.listennotes.com/e/p/${current}/`
      console.log(test)
      return test;
    }

    let test = play()

    const episodes  = 
    one.episodes?.map(el => {
      
      return (

        <Player title={el.title} id={el.id} setPlayer={(i)=> setPlayer(i)}></Player>
      )}
     
      )

    

    // const test = 
    const addEach =
      
(
          <div className="eachOne">
          <div className="desc">
          <div className="poster">
            <img src={one.image} alt="Podcast poster" id="post"></img>
          </div>
          
          <div className="title">
            <h1 id="podcast-title">{one.title}</h1>
            <Stars />
            <p id="podcast-desc">{one.description}</p>
      
          </div>
        </div>
        <div className="content">
          < Waveform audio={test}/>
          <div className="episodes"><h3>Episodes Available: </h3>
          <ul>
              {episodes}
            </ul>
            </div>
        </div>
        </div>
        )
    
      
  
      
     
    useEffect(() => {
      getEach()
    }, [])

  return (
    <>
   {addEach}
    </>
  )
  }