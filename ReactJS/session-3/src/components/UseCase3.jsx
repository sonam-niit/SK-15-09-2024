import { useState } from "react";

function UseCase3() {
    const [name,setName]=useState('');
    const handlechange= (e)=>{
        setName(e.target.value);
    }
    const clear=()=>{
        setName('')
    }
    return ( 
        <>
            <h3>Welcome {name}</h3>
            <input type="text" onChange={handlechange} value={name} />
            <button onClick={clear}>Clear</button>
        </>
     );
}

export default UseCase3;