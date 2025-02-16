
function Greeting({name}){
    return <h3>Welcome {name}</h3>
}
function HelloWorld(){
    return (<h3>Hello </h3>)
}
function Sample() {
    return ( 
        <div>
            <Greeting name="Sonam Soni"/>
            <HelloWorld />
        </div>
     );
}

export default Sample;