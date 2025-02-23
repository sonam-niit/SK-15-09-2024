import { useEffect, useState } from "react";

function FetchData() {
    //create state to store user data
    const [users,setUsers]=useState([]);
    //Create function to fetchdata
    const load= async ()=>{
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            const data= await resp.json();
            setUsers(data); //update state once data loaded
        } catch (error) {
            console.log(error)
        }
    }
    //write useeffect which will the function once the component load
    useEffect(()=>{
        load();
    },[])
    return ( 
        <div>
            <h3>Users List</h3>
            {
                users.map(user=>(
                    <div key={user.id}>
                        <h3>Name: {user.name}</h3>
                        <p>
                            Email: {user.email} <br/>
                            Phone: {user.phone} <br/>
                            Address: {user.address.street}, {user.address.suite}, 
                            {user.address.city}, {user.address.zipcode}
                        </p>
                        <hr/>
                    </div>
                ))
            }
        </div>
     );
}

export default FetchData;