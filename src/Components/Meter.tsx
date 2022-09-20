import React from 'react';
import './Rating.css';

export default function Meter() {
  return (
    <div className="c100 p25 big">
      <span>25%</span>
      <div className="slice">
        <div className="bar"></div>
        <div className="fill"></div>
      </div>
    </div>
  );
}
