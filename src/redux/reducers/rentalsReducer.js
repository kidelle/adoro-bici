const rentalsReducer = (state = [], action) => {
    console.log('in Rental Reducer', action.payload);
    switch (action.type) {
        case 'SET_RENTALS':
            return action.payload;
        default:
            return state;
    }
}

export default rentalsReducer;