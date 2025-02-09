function Greetings(props) {
    const name= props.name?props.name:'Guest'
    const message= props.message?props.message:'Hello..';
    return ( 
        <>
            <h3>Welcome {name}</h3>
            <h4>Message: {message}</h4><hr/>
        </>
     );
}

export default Greetings;