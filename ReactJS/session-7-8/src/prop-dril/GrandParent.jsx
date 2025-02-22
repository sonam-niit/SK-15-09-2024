import { useState } from "react";
import Parent from "./Parent";

function GrandParent() {
    const [message,setMessage]=useState('');
    return ( 
        <div style={{border:'2px solid red',padding:'10px',margin:'10px'}}>
            <h3>Grand Parent Component</h3>
            <input type="text" onChange={(e)=>setMessage(e.target.value)} />
            <Parent message={message} />
            {/* Passed Data from GP to Parent via props */}
        </div>
     );
}

export default GrandParent;