import products from '../assets/products.json';
import Details from './Details';
function List() {
    return (
        <>
            <h1>Product List</h1>
            <div style={{ display: 'flex' }}>
                {
                    products.map(item =>
                        (<Details key={item.id} item={item} />)
                    )
                }
            </div>
        </>
    );
}

export default List;