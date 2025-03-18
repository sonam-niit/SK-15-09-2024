import { useEffect,useState } from "react";

function useWindowWidth(){
    const [width,setWidth]=useState(window.innerWidth);
    useEffect(()=>{
        const handleResize=()=>setWidth(window.innerWidth);
        window.addEventListener('resize',handleResize);

        //clean up
        return ()=>window.removeEventListener('resize',handleResize);
    })

    return width;
}

export default useWindowWidth;