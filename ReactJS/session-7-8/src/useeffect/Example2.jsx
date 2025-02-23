import { useEffect } from "react";

function Example2() {
    useEffect(()=>{
        console.log('Component Mounted');
        //it trigger when comp removes from DOM
        return(()=>{
            console.log('Component Unmounted')
        })
    },[])
    return ( 
        <div>
            <h3>Component Example2</h3>
        </div>
     );
}

export default Example2;