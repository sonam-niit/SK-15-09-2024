const initialState = {
    count: 0,
}
function CounterReducer(state = initialState, action) {

    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 }
        case 'DECREMENT':
            return { ...state, count: state.count - 1 }
        case 'INCBYVALUE':
            return { ...state, count: state.count + action.payload }
        case 'DECBYVALUE':
            return { ...state, count: state.count - action.payload }

        default:
            return state;
    }
}
export default CounterReducer;