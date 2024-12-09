import React, { useEffect, useState } from 'react'

function Counter() {
    var [counter,setCounter] = useState(0)
    useEffect(()=>{
        function fun(){
            console.log("Hello");
        }
        let interval = setInterval(fun, 3000)
        return() =>{
            clearInterval(interval)
        }
    },[counter])
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={()=>{setCounter(counter+1)}}>+++</button>
    </div>
  )
}

export default Counter
