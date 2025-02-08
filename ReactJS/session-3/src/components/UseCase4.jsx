import { useState } from "react";

function UseCase4() {
    const [data, setData] = useState(null);
    const handleClick = () => {
        setData({ name: 'Sonam Soni', email: 'sonam@gmail.com', address: 'Mumbai' })
    }
    return (
        <>
            <h3>UseCase 4</h3>
            { data &&
                <div>
                    <h4>My Data</h4>
                    <p>Name: {data.name} </p>
                    <p>Email: {data.email} </p>
                    <p>Address: {data.address} </p>
                </div>
            }
            <button onClick={handleClick}>FetchData</button>
        </>
    );
}

export default UseCase4;