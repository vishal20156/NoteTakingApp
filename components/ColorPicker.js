import React, { useState } from 'react'
const listOfColours = ["red","blue","green","yellow","beige"];

const ColorPicker = ({colorHandler}) => {
    const [ selected,setSelected ] = useState("")
    const handleColorChange = (ele) =>  {
        setSelected(ele);
        colorHandler(ele);
    }
    return <div className='color-toolkit'>
    { listOfColours.map((ele) => {
        return  <div key={ele} onClick={(e) => handleColorChange(ele)} style={{backgroundColor:ele}} className={`circle ${selected === ele ? 'selected' : ''}`}></div>
     }) }
    </div>
  
}

export default ColorPicker;