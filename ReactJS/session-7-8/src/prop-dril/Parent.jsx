import Child from "./Child";

function Parent(props) {
    return ( 
        <div style={{border:'2px solid blue',padding:'10px',margin:'10px'}}>
            <h3>Parent Component</h3>
            <Child message={props.message}/>
            {/* Paased Data from Parent to child */}
        </div>
     );
}

export default Parent;