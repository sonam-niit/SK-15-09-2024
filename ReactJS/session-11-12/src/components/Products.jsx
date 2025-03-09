import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
    const [products,setProducts]=useState([]);
    const fetchData=async()=>{
        try {
            const resp= await axios.get('https://dummyjson.com/products');
            if(resp.status==200)
                setProducts(resp.data.products);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    return ( 
        <div className="container">
            <h3 className="p-5 text-center">Products List</h3>
            <div className="row">
                {
                    products.map(product=>(
                        <div className="col-lg-4" key={product.id}>
                        <Link to={`/details/${product.id}`}> <img src={product.thumbnail} /> </Link>  
                            <h4>{product.title}</h4>
                            <h5>Only at ${product.price}</h5>
                            <p>{product.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
     );
}

export default Products;