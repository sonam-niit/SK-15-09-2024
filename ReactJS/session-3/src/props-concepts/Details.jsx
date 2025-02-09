function Details({item}) {
    const {name,price,imgUrl}=item;
    return ( 
        <div>
            <h4>{name}</h4>
            <p>Only at ₹{price}</p>
            <img src={imgUrl} height={200} />
        </div>
     );
}

export default Details;