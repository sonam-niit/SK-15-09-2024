import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/cartSlice";

function Cart() {
    const items = useSelector(state => state.cart.items)
    const dispatch=useDispatch();
    return (
        <div className="container">
            {
                items.map(item => (
                    <div key={item.product.id} className="row">
                        <div className="col">
                            <h3>{item.product.title}</h3>
                            <img src={item.product.thumbnail} />
                        </div>
                        <div className="col">
                            <button>-</button>{item.quantity}<button>+</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-danger"
                            onClick={()=>dispatch(removeItem(item.product.id))}>X</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Cart;