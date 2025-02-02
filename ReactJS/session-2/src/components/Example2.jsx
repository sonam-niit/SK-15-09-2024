function Example2() {
    const name="Sonam Soni"; 
    const fun1=()=>{
        alert('Function Triggered')
    }
    const person={name:'john doe',email:'john@gmail.com',age:32}
    return ( 
        <div>
            <h3>Welcome {name}</h3>
            <button onClick={fun1}>Click Me</button>
            <p>
                Name: {person.name} <br/>
                Email: {person.email} <br/>
                Age: {person.age}
            </p>
        </div>
     );
}

export default Example2;