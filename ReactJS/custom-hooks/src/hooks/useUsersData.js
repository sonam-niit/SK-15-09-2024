import axios from "axios";
import { useEffect,useState } from "react";

function useFetchData(link){
    const [users,setUsers]=useState([]);
    const fetchData=async()=>{
        const resp= await axios.get(link);
        setUsers(resp.data)
    }
    useEffect(()=>{
        fetchData()
    },[])

    return users;
}

export default useFetchData;