import { useState } from "react";
import { createContext } from "react";

export const MessageContext= createContext();

function MessageProvider({children}) {
    const [message,setMessage]=useState('message from Provider');
    const updateMessage=(input)=>{
        setMessage(input)
    }
    return ( 
        <MessageContext.Provider value={{message,updateMessage}}>
            {children}
        </MessageContext.Provider>
     );
}
export default MessageProvider;