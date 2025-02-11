import { useState } from "react";

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const handleClick = () => {
        setTodos([...todos, { id: Date.now(), task: input, status: false }]); //spread operator
        setInput('')//making input field blank after adding
    }
    const updateTast=(id)=>{
        setTodos(todos.map(item=>{
            if(item.id==id)
                item.status=true;
            return item
        }))
    }
    const deleteTast=(id)=>{
        setTodos(todos.filter(item=>item.id!==id))
    }
    return (
        <div className="container">
            <h1 className="text-center p-3 text-bg-secondary">Todo App</h1>
            <input type="text" className="form-control" value={input} onChange={handleChange} />
            <button className="btn btn-primary mt-3 w-100" onClick={handleClick}>Save</button>
            <h3 className="text-center p-2 text-bg-info mt-3">My todos</h3>
            {/* Below code is used to render the array of todos in form of unordered list */}
            <ul className="list-group mt-3">
                {
                    todos.map(item => (<li key={item.id} className={`list-group-item 
                    ${item.status ? 'text-success' : 'text-danger'} `}>
                        {item.task} 
                        {item.status? 
                        <button onClick={()=>deleteTast(item.id)} className="float-end">❌</button>
                        :<button onClick={()=>updateTast(item.id)} className="float-end">✔️</button>}
                    </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default TodoApp;