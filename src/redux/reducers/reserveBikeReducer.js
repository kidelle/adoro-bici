const reserveBikeReducer = (state = [], action) => {
    console.log('in reserveBike reducer', action.payload);
    switch (action.type) {
        case 'SET_RESERVE_BIKE':
            return action.payload;
        default:
            return state;
    }
}

export default reserveBikeReducer;