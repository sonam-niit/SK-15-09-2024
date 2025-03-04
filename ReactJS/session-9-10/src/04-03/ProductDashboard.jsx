import axios from "axios";
import { useEffect, useState } from "react";

function ProductDashboard() {
    const [products, setProducts] = useState([]);
    const [input, setInput] = useState({ name: '', price: 0.00, category: '', imgUrl: '', rating: 5 })
    const [edit,setEdit]=useState(false); //get idea the form for update or create
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!edit){
            //Logic for add new Product
            try {
                input.id = Date.now() + ""; //converting num to string
                const resp = await axios.post('http://localhost:3000/products', input);
                if (resp.status == 201) {
                    alert('Product added successfuly');
                    setInput({ name: '', price: 0.00, category: '', imgUrl: '', rating: 5 });
                    fetchData();
                }
            } catch (error) {
                console.log(error)
            }
        }else{
            try {
                //Logic for Update Product
                const resp = await axios.put(`http://localhost:3000/products/${input.id}`, input);
                if (resp.status == 200) {
                    alert('Product Updated successfuly');
                    setInput({ name: '', price: 0.00, category: '', imgUrl: '', rating: 5 });
                    setEdit(false);
                    fetchData();
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
    const fetchData = async () => {
        try {
            const resp = await axios.get('http://localhost:3000/products');
            if (resp.status == 200) {
                setProducts(resp.data);
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData(); //function trigger when the component loads
    }, [])
    const deleteProduct=async (id)=>{
        try {
            const resp= await axios.delete(`http://localhost:3000/products/${id}`)
            if(resp.status=200){
                alert('Product Deleted');
                setProducts(products.filter(product=>product.id!=id))
            }
        } catch (error) {
            console.log(error)
        }
    }
    const editProduct=async (id)=>{
        try {
            const resp= await axios.get(`http://localhost:3000/products/${id}`); //Get Product By Id
            if(resp.status=200){
                setInput(resp.data); //added all fetched product details in input field
                setEdit(true);
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="container">
            <h3>Product Dashboard</h3>
            {/* Add Product Form to add Products */}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" placeholder="Enter Product Name"
                        value={input.name} className="form-control"
                        onChange={(e) => setInput({ ...input, name: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="text" placeholder="Enter Product Price"
                        value={input.price} className="form-control"
                        onChange={(e) => setInput({ ...input, price: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <input type="text" placeholder="Enter Product category"
                        value={input.category} className="form-control"
                        onChange={(e) => setInput({ ...input, category: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image URL</label>
                    <input type="text" placeholder="Enter Product URL"
                        value={input.imgUrl} className="form-control"
                        onChange={(e) => setInput({ ...input, imgUrl: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Rating</label>
                    <input type="text" placeholder="Enter Product Rating"
                        value={input.rating} className="form-control"
                        onChange={(e) => setInput({ ...input, rating: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    {edit?'Update Product':'Create Product'}
                </button>
            </form>
            <h3 className="text-center my-3 p-2 text-bg-warning">Product List</h3>
            <div className="row">
                {
                    products.map(product => (
                        <div className="col-lg-4">
                            <img src={product.imgUrl} height={300} width={300} />
                            <h4>{product.name}</h4>
                            <div className="row">
                                <div className="col-lg-8">
                                    Category: {product.category} <br />
                                    <b>${product.price} </b><br />
                                    Rating: {product.rating} <br />
                                </div>
                                <div className="col-lg-2">
                                    <button className="mt-4 btn btn-danger" 
                                        onClick={()=>editProduct(product.id)}>Edit</button>
                                </div>
                                <div className="col-lg-2">
                                    <button className="mt-4 btn btn-danger" 
                                        onClick={()=>deleteProduct(product.id)}>X</button>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ProductDashboard;