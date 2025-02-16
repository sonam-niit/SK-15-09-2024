import { useState } from "react";
import ProductData from '../assets/products.json';

function Example1() {
    const [products, setProducts] = useState(ProductData);//Assign data as initial
    return (
        <div className="container-fluid">
            <h1>Products List</h1>
            <div className="row">
                {
                    products.map(product => (
                        <div className="col" key={product.id}>
                            <h4>{product.title}</h4>
                            <img src={product.thumbnail} alt={product.title} />
                            <p><b>{product.price}</b> <br />
                                <span className={`${product.rating>3.5?'text-success':'text-danger'}`}>
                                    Rating: {product.rating}</span>
                            </p>
                            <span>{product.stock>0?'In Stock':'Out Of Stock'}</span>
                            <button className="btn btn-primary w-100">Add To Cart</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Example1;