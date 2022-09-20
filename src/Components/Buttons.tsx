import React, { useState } from 'react';
import '../App.css';
import Ranking from './Ranking';
import Welcome from './Welcome';
import { Link } from 'react-router-dom';
export default function Buttons() {
  // const [after, setAfter] = useState(true)

  return (
    <div className="navbutt">
      <Link to="/ranking">
        <div id="butt">
          <h1 id="buttD">Discover</h1>
        </div>
      </Link>
      <Link to="/profile">
        <div id="butt">
          <h1 id="buttP">Profile</h1>
        </div>
      </Link>
    </div>
  );
}
