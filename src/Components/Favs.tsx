import React, {
  CSSProperties,
  EventHandler,
  HtmlHTMLAttributes,
  useState,
} from 'react';
import './Ranking.css';
import heart from '../Images/heart.png';
import { State } from 'zustand';

export default function Fav(props: any) {
  const [onAdd, setOnAdd] = useState([]);

  const handleStyle = (event: React.MouseEvent<HTMLInputElement>) => {
    event.currentTarget.style.backgroundColor = 'salmon';

    event.preventDefault();
    let databody = {
      name: props.title,
      // "quote": props.id
    };

    fetch('http://localhost:3001/stored', {
      method: 'POST',
      body: JSON.stringify(databody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => props.setLiked([...props.liked, res]))
      .catch((err) => console.log(err));
  };

  return <img src={heart} className="hearts" onClick={() => handleStyle}></img>;
}
