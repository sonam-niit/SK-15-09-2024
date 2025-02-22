function Child(props) {
    return ( 
        <div style={{border:'2px solid green',
        padding:'10px',margin:'10px'}}>
            <h3>Child Component</h3>
            <h4>Message From Grand Parent:{props.message}</h4>
        </div>
     );
}

export default Child;