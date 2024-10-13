import React, { useEffect, useState } from 'react'
import './ColorGenerator.css'
const ColorGenerator = () => {

    const [typeOfColor, setTypeOfColor] = useState("RGB");
    const [color, setColor] = useState("#000fff");

    const randomColorUtility = (length) =>{
        return Math.floor(Math.random()*length)
    }
    const handleCreateRandomColor = () =>{
        const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor = "#"
        console.log(randomColorUtility(hex.length));
        for(let i=0; i<6; i++)
        {
            hexColor+=hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor)
    }
    const handleCreateRgbColor = () =>{

        const r = randomColorUtility(255)
        const g = randomColorUtility(255)
        const b = randomColorUtility(255)
        setColor(`rgb(${r},${g},${b})`)
        
    }

    useEffect(()=>{
        if(typeOfColor === "RGB")
        {
            handleCreateRgbColor()
        }
        else{
            handleCreateRandomColor()
        }
    },[typeOfColor])
  return (
    <div className='ColorGenrator' 
        style={
            {
                background: color
            }
        }>
        <div className="btns">
            <button onClick={()=>setTypeOfColor("HEX")}>Create HEX Color</button>
            <button onClick={()=>setTypeOfColor("RGB")}>Create RGB Color</button>
            <button onClick={typeOfColor === "HEX"? handleCreateRandomColor : handleCreateRgbColor}>Generate Random Color</button>
        </div>
        <div className="ColorTitleType">
            <h1>{typeOfColor} Color</h1>
        </div>
        <div className="ColorCode">
            <h2>{color}</h2>
        </div>
    </div>
  )
}

export default ColorGenerator