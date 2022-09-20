import React from 'react';
import './Container.css';
import { useEffect, useState } from 'react';
// import styled from 'styled-components';
import Waveform from './Waveform';
import Player from './Player';
import Stars from './Rating';

export default function Podcast() {
  const [one, setEach] = useState<any>([]);
  const initial = 1;
  const [current, setCurrent] = useState<any>(initial);
  // /=============================================/ API
  const getEach = async () => {
    const response = await fetch('http://localhost:3001/podcasts/93');
    const data = await response.json();
    setEach(data);
    console.log(data);
    return data;
  };

  function setPlayer(episodes: [any]) {
    setCurrent(episodes);
    console.log(current);
  }

  function play() {
    console.log('play is working');
    const test = `https://www.listennotes.com/e/p/${current}/`;
    console.log(test);
    return test;
  }

  let test = play();

  type element = {
    id: number;
    title: string;
    description: string;
    image: string;
    episodes: [];
  };

  const episodes = one.episodes?.map((el: element) => {
    return (
      <Player
        title={el.title}
        id={el.id}
        setPlayer={(i: any) => setPlayer(i)}
      ></Player>
    );
  });

  // const test =
  const addEach = (
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
        <Waveform audio={test} />
        <div className="episodes">
          <h3>Episodes Available: </h3>
          <ul>{episodes}</ul>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    getEach();
  }, []);

  return <>{addEach}</>;
}
