import { useEffect } from "react";

function BackgroundMusic() {
    useEffect(()=>{
        const audio= new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
        // audio.play();
        return(()=>{
            audio.pause();
            audio.currentTime=0;
        });
    },[])
    return ( 
        <div>
            <h2>Music is playing in Background</h2>
        </div>
     );
}

export default BackgroundMusic;