import React, { useState } from 'react'
import "./Style.css"

const Themechanger = () => {
    const [color, setColor] = useState("white")
    const [name, setName] = useState("white")
    const [mode, setMode] = useState("Dark")

    function handleThemeChanger(){
        if(color === "white"){
            setColor("black")
            setName("text-white")
            setMode("Light")

        } else{
            setColor("white")
            setName("text-black")
            setMode("Dark")
        }
    }
  return (
    <div>
      <div className={color}>
      <button className='btn' onClick={handleThemeChanger}>{mode} Mode</button>
      <h1 className={name}>Kartik M.</h1>
      </div>
    </div>
  )
}

export default Themechanger
