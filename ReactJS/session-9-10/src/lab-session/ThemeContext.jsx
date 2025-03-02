import { useState } from "react";
import { createContext } from "react";

export const ThemeContext= createContext();
function ThemeProvider({children}) {
    const [theme,setTheme]=useState('light');
    const updateTheme=()=>{
        if(theme=='light')
            setTheme('dark')
        else
            setTheme('light')
    }
    return ( 
        <ThemeContext.Provider value={{theme,updateTheme}}>
            {children}
        </ThemeContext.Provider>
     );
}

export default ThemeProvider;