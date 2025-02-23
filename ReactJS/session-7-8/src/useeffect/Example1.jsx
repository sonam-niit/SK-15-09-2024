import { useEffect, useState } from "react";

function Example1() {

    const [count,setCount]=useState(0);
    const [input,setInput]=useState('');
    useEffect(()=>{
        console.log('Component mounted successfully')
    },[]) // this hook will only when the component mounts
    useEffect(()=>{
        console.log('Count ',count)
    },[count]) //this will run only if count value updates
    useEffect(()=>{
        console.log('input ',input)
    },[input]) //this will run only if input value updates
    return ( 
        <div>
            <h3>Example UseEffect:{count}</h3>
            <button onClick={()=>setCount(count+1)}>+</button>
            <input type="text" onChange={(e)=>setInput(e.target.value)} />
        </div>
     );
}

export default Example1;