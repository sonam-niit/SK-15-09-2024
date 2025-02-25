//Child Component
function Demo1(props) {
    return ( 
        <div>
            <h3>
                Name: {props.name} <br/>
                Message: {props.message}
            </h3><hr/>
        </div>
     );
}

export default Demo1;