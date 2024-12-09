import React, { useEffect, useState } from 'react'

function Jokes() {
    let [data, setData]= useState({})
  function genetateJoke(){
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then((result)=>{
        return result.json()
    }).then((response)=>{
        // console.log(response);
        setData(response)
    })
  }
  useEffect(()=>{
    genetateJoke()
   },[])
  return (
    <div>
      <p>Joke : {data.setup}</p>
      <p>Punchline : {data.punchline}</p>
      <button onClick={genetateJoke}>Generate Joke</button>
    </div>
  )
}

export default Jokes
