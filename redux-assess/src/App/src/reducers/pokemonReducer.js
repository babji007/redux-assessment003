const initial_state = {
    res: [], 
    error:null
}
const regionReducer = (state = initial_state, action) => {
    switch (action.type ) {
        case "FETCH_ABILITIES":
        return {
            ...state,
            res: action.payload
        }
        case "INVALID_REQST":
            return {
                ...state,
                error: action.payload
            }
            default:
                return state;
    } 
    
}

export default regionReducer;