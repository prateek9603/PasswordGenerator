import React, {useState} from 'react'

function BgChanger() {

    const [color,setColor] = useState("black");

  return (
    <>
        <div className="BgChanger w-full h-screen" style={{backgroundColor:color}}  >
            <div className='fixed flex flex-wrap rounded-xl px-3 py-2' style={{backgroundColor:"#fff"}}>

            <button className='red rounded-full py-1 px-3 mx-1' style={{backgroundColor:"red" , color:"#fff"}} onClick={()=>{setColor("red")}}>Red</button>

            <button className='green rounded-full py-1 px-3 mx-1' style={{backgroundColor:"green" , color:"#fff"}} onClick={()=>{setColor("green")}}>Green</button>
            
            <button className='blue rounded-full py-1 px-3 mx-1' style={{backgroundColor:"blue" , color:"#fff"}} onClick={()=>{setColor("blue")}}>Blue</button>

            <button className='blue rounded-full py-1 px-3 mx-1' style={{backgroundColor:"olive" , color:"#fff"}} onClick={()=>{setColor("olive")}}>olive</button>

            <button className='blue rounded-full py-1 px-3 mx-1' style={{backgroundColor:"pink" , color:"#fff"}} onClick={()=>{setColor("pink")}}>pink</button>

            <button className='blue rounded-full py-1 px-3 mx-1' style={{backgroundColor:"brown" , color:"#fff"}} onClick={()=>{setColor("brown")}}>Brwon</button>
            
            </div>
        </div>
    </>
  )
}

export default BgChanger