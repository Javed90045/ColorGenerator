import React from 'react'
import './ColorGenerator.css'
const ColorGenerator = () => {
  return (
    <div className='ColorGenrator'>
        <div className="btns">
            <button>Create HEX Color</button>
            <button>Create RGB Color</button>
            <button>Generate Random Color</button>
        </div>
        <div className="ColorTitleType">
            <h1>HEX Color</h1>
        </div>
        <div className="ColorCode">
            <h2>#2261A9</h2>
        </div>
    </div>
  )
}

export default ColorGenerator