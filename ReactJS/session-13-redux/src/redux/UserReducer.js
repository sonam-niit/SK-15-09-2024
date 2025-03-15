const initialState={
    loggedIn:false,
}
function UserReducer(state=initialState,action){

    switch(action.type){
        case 'login':
            return {...state,loggedIn:true}
        case 'logout':
            return {...state,loggedIn:false}

        default:
            return state;
    }
}
export default UserReducer;