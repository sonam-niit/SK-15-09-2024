import Child1 from "./Child";

function Parent1() {
    return ( 
        <div style={{border:'2px solid blue',padding:'10px',margin:'10px'}}>
            <h3>Parent Component</h3>
            <Child1 />
        </div>
     );
}

export default Parent1;