const reservationReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_RESERVATION':
            return action.payload;
        default:
            return state;
    }
}

export default reservationReducer;