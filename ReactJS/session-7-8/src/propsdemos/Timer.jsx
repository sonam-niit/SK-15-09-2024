import { useEffect } from "react";
import { useState } from "react";

function Timer() {
    const [seconds,setSeconds]= useState(0);
    const [isRunning,setIsRunning]=useState(false);
    useEffect(()=>{
        let timer;
        if(isRunning){
            timer=setInterval(()=>{
                setSeconds(prev=>prev+1);
            },1000)
        }
        return(()=>clearInterval(timer));
    },[isRunning])
    return ( 
        <div>
            <h1>Timer: {seconds} seconds</h1>
            <button onClick={()=>setIsRunning(true)} className="btn btn-warning">Start</button>
            <button onClick={()=>setIsRunning(false)} className="btn btn-success ms-2">Pause</button>
            <button onClick={()=>{setSeconds(0); setIsRunning(false)}} className="btn btn-dark ms-2">Reset</button>
        </div>
     );
}

export default Timer;