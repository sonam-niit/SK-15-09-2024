import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

function Products() {
    const [products, setProducts] = useState([]);
    const fetchData = async () => {
        const resp = await axios.get('https://dummyjson.com/products');
        if (resp.status == 200) {
            setProducts(resp.data.products);
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Products List</h1>
            <div className="row">
                {
                    products.map(product => (
                        <div className="col-lg-3" key={product.id}>
                            <div className="card" style={{width: '18rem'}}>
                                <img src={product.thumbnail} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <button className="btn btn-primary"
                                        onClick={()=>dispatch(addItem(product))}>Add to Cart</button>
                                    </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Products;