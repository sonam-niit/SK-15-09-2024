import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddCustomer() {
    const [customer,setCustomer] = useState({name:'',email:'',password:''})
    const {id} = useParams();
    const navigate = useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(!id)
            addCustLogic();
        else
            editCustLogic();
    }
    const addCustLogic=async()=>{
        customer.id="C"+Date.now();
        try {
            const resp=await axios.post('http://localhost:5000/api/customer',customer);
            if(resp.status==201){
                alert('Customer Registered');
                navigate('/custlist');
            }
        } catch (error) {
            console.log(error)
        }
    }
    const editCustLogic=async()=>{
        try {
            const resp=await axios.put(`http://localhost:5000/api/customer/${id}`,customer);
            if(resp.status==200){
                alert('Customer Updated');
                navigate('/custlist');
            }
        } catch (error) {
            console.log(error)
        }
    }
    const fetchData=async()=>{
        try {
            const resp = await axios.get(`http://localhost:5000/api/customer/${id}`);
            setCustomer(resp.data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchData()
    },[id])
    return (
        <form className="container" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label>Name</label>
                <input type="text" placeholder="Enter Name"
                    className="form-control" value={customer.name}
                    onChange={(e)=>setCustomer({...customer,name:e.target.value})}/>
            </div>
            <div className="mb-3">
                <label>Email</label>
                <input type="email" placeholder="Enter Email"
                    className="form-control" value={customer.email}
                    onChange={(e)=>setCustomer({...customer,email:e.target.value})}/>
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input type="password" placeholder="Enter Password"
                    className="form-control" value={customer.password}
                    onChange={(e)=>setCustomer({...customer,password:e.target.value})} />
            </div>
            <button className="btn btn-primary my-2 w-100" type="submit">
            {id?'Update Customer':'Save Customer'}    
            </button>
        </form>
    );
}

export default AddCustomer;