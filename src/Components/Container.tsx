import React from 'react';
import './Container.css';
import Podcast from './Podcast';
import Welcome from './Welcome';
import Ranking from './Ranking';
import { useEffect, useState } from 'react';
import Buttons from './Buttons';
import Fake from './fakeit';
// import getPodcasts from "../ApiService"

export default function Container() {
  const [liked, setLiked] = useState([]);

  return (
    <div className="main">
      {/* {after? (<Welcome liked={liked} />) : (<Ranking liked={liked} setLiked={(i)=>setLiked(i)}/>)} */}
      {/* <Fake /> */}
    </div>
  );
}

// { after: any }
