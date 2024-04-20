import React, { useCallback, useEffect, useRef, useState } from 'react'

function Password() {
    const [length,setLength] = useState(8);
    const [numberAllowed,setNumberAllowed] = useState(false);
    const [charAllowed,setcharAllowed] = useState(false);
    const [password, setPassword] = useState(""); 

    let passwordRef = useRef(null);

    const copyPasswordToClipBoard = useCallback(()=>{
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password)
    },[password])

    // password generator
    const passwordGenerator = useCallback (()=>{
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(numberAllowed ) str += "0123456789";
        if(charAllowed ) str += "!@#$%^&*()_+{}[]|?><.:\"~`=-,";

        for(let i=1;i<=length;i++){
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char)
        }
        setPassword(pass)

    },[length,numberAllowed,charAllowed,setPassword])

    useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
          <h1 className='text-xl text-center text-white py-3 '>Password Genorator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
              <input 
              type="text"
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='Password'
              readOnly 
              ref={passwordRef}/>
              <button className='bg-blue-700 outline-none text-white py-0.5 px-3 shrink-0'
              onClick={copyPasswordToClipBoard}>Copy</button>
          </div> 
          <div className='flex text-sm gap-x-2'>
               <div className='flex items-center gap-x-1'>
                <input 
                type="range"
                min={8}
                max={16}
                value={length}
                className='cursor-pointer'
                onChange={(e)=>{setLength(e.target.value)}}/>
                <label>length:{length}</label>
               </div>
               <div className='flex items-center gap-x-1'>
                <input 
                type="checkbox"
                defaultChecked={numberAllowed}
                id='numberInput'
                onChange={()=>{setNumberAllowed((prev) => !prev)}} />
                <label htmlFor="">Numbers</label>
               </div>
               <div className='flex items-center gap-x-1'>
                <input 
                type="checkbox"
                defaultChecked={charAllowed}
                id='numberInput'
                onChange={()=>{setcharAllowed((prev) => !prev)}} />
                <label htmlFor="">Characters</label>
               </div>
          </div>
        </div>

    </>
  )
}

export default Password