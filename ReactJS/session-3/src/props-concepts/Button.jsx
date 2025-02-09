//Data Destructing of Props
//No need to do like props.name
function Button({name,method}) {
    return ( 
        <button onClick={method}>{name}</button>
     );
}

export default Button;