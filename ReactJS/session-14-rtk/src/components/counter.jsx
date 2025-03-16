import { useDispatch } from "react-redux";
import { decrement, incByAmt, increment } from "../redux/counterSlice";
import { useState } from "react";

function Counter() {
    
    const dispatch= useDispatch();
    const [input,setInput]=useState(0);
    return ( 
        <div>
            <h3>Counter Component</h3>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <input type="text" placeholder="Enter any Number"
            onChange={(e)=>setInput(e.target.value)} />
            <button onClick={()=>dispatch(incByAmt(Number(input)))}>Inc By Amount</button>
        </div>
     );
}

export default Counter;