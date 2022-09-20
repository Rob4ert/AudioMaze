import React, { useState } from 'react';
import './Container.css';

type Pleya = {
  title: string;
  id: number;
};

export default function Player({ Pleya, setPlayer }: any) {
  const play = () => {
    setPlayer(Pleya.id);
  };

  return (
    <li>
      <a className="clickId" onClick={play}>
        {Pleya.title}
      </a>
    </li>
  );
}
