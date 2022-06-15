import React from "react";
import "./Rating.css"


export default function Meter () {
  return (
    <div class="c100 p25 big">
  <span>25%</span>
  <div class="slice">
    <div class="bar"></div>
    <div class="fill"></div>
  </div>
</div>
  )
}