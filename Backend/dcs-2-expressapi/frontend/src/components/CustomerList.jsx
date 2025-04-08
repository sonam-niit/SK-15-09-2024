import { useEffect, useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
function CustomerList() {
    const [customers, setCustomer] = useState([]);
    const navigate = useNavigate();
    const fetchData = async () => {
        try {
            const resp = await axios.get('http://localhost:5000/api/customer');
            setCustomer(resp.data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    const editCust = (id) => {
        navigate(`/editcust/${id}`)
    }
    const deleteCust = async (id) => {
        try {
            const resp = await axios.delete(`http://localhost:5000/api/customer/${id}`)
            if (resp.status == 200) {
                alert('Customer Deleted');
                setCustomer(customers.filter(item => item.id !== id));//frontend filter
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr><th>ID</th><th>Name</th><th>Email</th><th>Operations</th></tr>
                </thead>
                <tbody>
                    {
                        customers.map(customer => (
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>
                                    <button
                                        onClick={() => editCust(customer.id)}>
                                            <FontAwesomeIcon icon={faEdit} size="xl" 
                                            style={{color: "#07f20b",}}/>
                                        </button>
                                    <button className="ms-3"
                                        onClick={() => deleteCust(customer.id)}>
                                            <FontAwesomeIcon icon={faTrash} size="xl" 
                                            style={{color: "#f20707"}}/>
                                        </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default CustomerList;