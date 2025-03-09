import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
    const {id}= useParams();
    const [product,setProduct]=useState(null);
    const fetchData=async()=>{
        try {
            const resp= await axios.get(`https://dummyjson.com/products/${id}`);
            if(resp.status==200){
                setProduct(resp.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    return ( 
        <div className="container">
            {
                product &&

                <div>
                    <h3>{product.title}</h3>
                    <img src={product.thumbnail} />
                    <h4>${product.price}</h4>
                    <h5>Rating: {product.rating}</h5>
                    <p>Description: {product.description}</p>
                    <p>
                        Warrnty: {product.warrantyInformation} <br/>
                        Shipping Details: {product.shippingInformation}
                        Availability: {product.availabilityStatus}
                    </p>
                    <h4>Reviews</h4>
                    {
                        product.reviews.map((review,index)=>(
                            <div key={index}>
                                <hr/>
                                <h5>Reviewer Name: {review.reviewerName}</h5>
                                <p>
                                    Rating: {review.rating} <br/>
                                    Comment: {review.comment} <br/>
                                    Date: {review.date}
                                </p>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
     );
}

export default Details;