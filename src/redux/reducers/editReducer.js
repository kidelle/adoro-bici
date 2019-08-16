const editReducer = (state = {}, action) => {
    console.log('in EDIT Reducer', action.payload);
    switch (action.type) {
        case 'EDIT_RENTALS':
            return action.payload;
        default:
            return state;
    }
}

export default editReducer;