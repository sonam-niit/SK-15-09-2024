import { useState } from "react";
import { useDispatch } from "react-redux";

function Counter() {
    const dispatch = useDispatch(); //to dispatch Action
    const [input, setInput] = useState(0);

    return (
        <div>
            <h1>Counter Component</h1>
            <button onClick={ () => dispatch({ type: 'INCREMENT' })}>+</button>
            <button onClick={() =>dispatch({ type: 'DECREMENT' })}>-</button>
            <input type="text" placeholder="Enter your Input"
                onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => dispatch({ type: 'INCBYVALUE', payload: Number(input) })}>
                Increment By Value</button>
            <button onClick={() => dispatch({ type: 'DECBYVALUE', payload: Number(input) })}>
                Decrement By Value</button>

        </div>
    );
}

export default Counter;