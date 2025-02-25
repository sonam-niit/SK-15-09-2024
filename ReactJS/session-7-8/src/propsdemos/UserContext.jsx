import { createContext, useState } from "react";


export const UserContext= createContext();

function UserProvider({children}) {
    const [loggedIn,setLoggedIn]=useState(false);
    const login=()=>{
        setLoggedIn(true);
    }
    const logout=()=>{
        setLoggedIn(false);
    }
    return ( 
        <UserContext.Provider  value={{loggedIn,login,logout}}>
            {children}
        </UserContext.Provider>
     );
}

export default UserProvider;