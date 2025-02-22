import { useContext } from "react";
import { MessageContext } from "./MessageProvider";

function Child1() {
    const {message}=useContext(MessageContext);
    return ( 
        <div style={{border:'2px solid green',padding:'10px',margin:'10px'}}>
            <h3>Child Component:{message}</h3>
            
        </div>
     );
}

export default Child1;