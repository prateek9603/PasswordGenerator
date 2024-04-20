import React, { useState } from 'react'

function Counter() {
    let [counter,setCounter] = useState(0);

    function add(){
        setCounter(counter + 1)
    }
    function sub(){
        setCounter(counter - 1)
    }
  return (
    <>
    <h1>Counter Application</h1>  
    <div className='counter'>
        <h1>{counter}</h1>
        <div className='btn'>
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
        </div>
    </div>  

    </>
  )
}

export default Counter