import { useState } from "react";

function UseCase2() {
    const [flag, setFlag] = useState(false); //boolean initial value
    const handleClick = () => {
        setFlag(!flag)
    }
    return (<>
        <h3>UseCase 2</h3>
        {flag ?
            <>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTixMUT-tvYkn-4K0khhYC3lKHV_mRmBGpc0g&s'
                    height='200' width='500' />
                <br />
            </>
            : <></>}
        <button onClick={handleClick} style={{backgroundColor: flag?'green':'red',
            color:'white',fontSize:'20px',padding:'10px'}}>
            {flag ? 'Hide' : 'Show'}
        </button>
    </>);
}

export default UseCase2;