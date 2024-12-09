import React, { useEffect, useState } from 'react'

export default function Image() {
    let [data, setData] = useState({})
    function generateImage(){
        fetch("https://dog.ceo/api/breeds/image/random")
        // fetch("https://randomfox.ca/floof/") setImageSrc=data.image
        .then((result)=>{return result.json()})
        .then((response) => {
            setData(response)
            console.log(response);
        })
    }
    useEffect(()=>{
        // setInterval(()=>{
            
        // })
        generateImage() 
    },[])
    
  return (
    <div>
      <button onClick={generateImage}>Generate Image</button>
      <img src={data.message} height={300} alt="" />
    </div>
  )
}
