import { useContext, useState } from "react";
import Parent1 from "./Parent1";
import { MessageContext } from "./MessageProvider";

function GrandParent1() {
    const {updateMessage} = useContext(MessageContext);
    return ( 
        <div style={{border:'2px solid red',padding:'10px',margin:'10px'}}>
            <h3>Grand Parent Component</h3>
            <input type="text" onChange={(e)=>updateMessage(e.target.value)} />
            <Parent1 />
        </div>
     );
}

export default GrandParent1;