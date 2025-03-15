import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import UserReducer from "./UserReducer";

const RootReducer= combineReducers({
    counter: CounterReducer,
    userred: UserReducer,
})

export default RootReducer;