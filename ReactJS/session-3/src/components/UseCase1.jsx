import { useState } from "react";

function UseCase1() {
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1)//its updating state
    }
    const decrement=()=>{
        if(count>0)
            setCount(count-1)//its updating state
        else
            alert('Value cannot be negative')
    }
    return ( <>
        <h1>Use Case 1: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </> );
}

export default UseCase1;