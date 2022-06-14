import React from "react"
import "./Sidemenu.css"
import { useEffect, useState } from "react";


export default function Sidemenu() {
  const [mock, setMock] = useState([])
  
  const getPodcasts =  async () => {
    const response =  await fetch("http://localhost:3001/cat")
    const data = await response.json()
    console.log(data)
    setMock(data)

  }
useEffect(() => {
  getPodcasts()
}, [])

const display = 
  mock.results?.map



function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const [categories, SetCategories] = useState([])

    const getCategories = async () => {
      const response = await fetch("http://localhost:3001/genres")
    const data = await response.json()
   
    var arr = [];
    Object.keys(data).forEach(function(key) {
      arr.push(data[key]);
      SetCategories(arr)
      console.log(categories)
    });
    }

    const addCategory = 
      categories[0]?.map(item => {

        return (
          <>
          <a href="#">{item.name}</a>
      </>
        )})
    
      useEffect(() => {
        getCategories()
      }, [])
   
  return (
    // <header tabindex="0">Header</header>,
   <>
<div id="mySidenav" className="sidenav">,
  <a  className="closebtn" onClick={closeNav}>&times;</a>
  {addCategory}
</div>


<span id="H1" onClick={openNav}><h1 >Categories</h1></span>


<div id="main">
</div>
</>
  )
}