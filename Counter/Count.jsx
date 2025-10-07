import React, { useEffect, useState } from 'react'

function Count() {
    const [count,setcount]=useState(0)
    const [input,setinput]=useState('')



    useEffect(()=>{
        const saved=localStorage.getItem("count");
        if(saved !==null){
            setcount(Number(saved))
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("count",count);
    },[count])


    const add =()=>{
        const number=Number(input);
        if(!isNaN(number)){
            setcount(number)
            setinput("")
        }
    }
    const handleAdd =()=>{
        if(count<10)setcount(count+1)};
    const handleDelect =()=>setcount(count-1)
    const handleReset =() =>setcount(0)
  return (
    <div    
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     <div 
      style={{
          textAlign: "center",
          background: "green",
          padding: "40px",
          width: "300px",
        }} 
        >
        <h1>{count}</h1>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px"}}>
        <input type="number" value={input} onChange={(e)=>setinput(e.target.value)} />
        <button onClick={add}>add</button>
        </div><br />

        <button onClick={handleAdd}>+</button>
        <button onClick={handleDelect} disabled={count===0}>-</button>
        <button  onClick={handleReset}>reset</button>

    </div>
    </div>
  )
}

export default Count