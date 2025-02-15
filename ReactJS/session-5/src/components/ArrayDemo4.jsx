import { useState } from "react";

function ArrayDemo4() {
    const [students,setStudents]=useState([]); //storage
    const [input,setInput]=useState('');//String state to take input
    const handleClick=()=>{
        setStudents([...students,input]);
        alert('student added successfully');
        setInput('')
    }
    return ( 
        <div className="container mt-3">
            <input type="text" value={input} className="form-control mt-3"
            onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={handleClick} className="btn btn-primary mt-3 w-100">
                Save Student</button>
            <hr/>
            <ul className="list-group">
                {
                    students.map((stu,index)=><li key={index} className="list-group-item">
                        {stu}</li>)
                }
            </ul>
        </div>
     );
}

export default ArrayDemo4;