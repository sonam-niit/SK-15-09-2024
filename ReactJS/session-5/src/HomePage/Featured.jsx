import { useState } from 'react';
import ProductsData from '../assets/products.json';
function Featured() {
    const [products, setProducts] = useState(ProductsData);
    return (
        <div>
            <h3 className='text-center text-bg-primary p-2'>Featured Products</h3>
            <div className='row'>
                {
                    products.map(product => (
                        <div className='col-md-3' key={product.id}>
                            <div className="card" style={{width: '18rem'}}>
                                <img src={product.thumbnail} className="card-img-top" alt={product.title}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">${product.price}</p>
                                        <p className="card-text">Rating: {product.rating}</p>
                                        <a href="#" className="btn btn-primary">Add To Cart</a>
                                    </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Featured;