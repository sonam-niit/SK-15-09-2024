const myCSS={
    backgroundColor:'black',
    color:'green',
    padding:'15px'
}
// Inline CSS in React
function Example3() {
    return ( 
        <>
            <h2 style={
                {backgroundColor:'orange',
                color:'white',
                padding:'10px'}
                }>
                    My Name is Sonam Soni</h2>
            <h3 style={myCSS}>This is my Another Inline CSS</h3>
        </>
     );
}

export default Example3;