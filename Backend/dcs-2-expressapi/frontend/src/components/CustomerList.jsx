import { useEffect, useState } from "react";
import axios from 'axios';
function CustomerList() {
    const [customers,setCustomer]=useState([]);
    const fetchData=async()=>{
        try {
            const resp = await axios.get('http://localhost:5000/api/customer');
            setCustomer(resp.data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    return ( 
        <div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr><th>ID</th><th>Name</th><th>Email</th></tr>
                </thead>
                <tbody>
                    {
                        customers.map(customer=>(
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
     );
}

export default CustomerList;