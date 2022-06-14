import React, {useState} from "react";
import "./Ranking.css"
import heart from "../Images/heart.png"

export default function Fav(props) {

  const [onAdd, setOnAdd ] = useState([])

  const handleStyle = event => {
    event.currentTarget.style.backgroundColor = 'salmon';

    event.preventDefault();
    let databody = {
        name: props.title,
        // "quote": props.id
    }

    fetch('http://localhost:3001/stored', {
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json()).then((res) => props.setLiked([...props.liked, res])).catch((err)=>console.log(err))
}


  return (
    <img src={heart} className="hearts" onClick={handleStyle}></img>
  )
}