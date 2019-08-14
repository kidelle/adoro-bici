const summaryReducer = (state = {}, action) => {
    console.log('in reserveBike reducer', action);
    switch (action.type) {
        case 'SET_SUMMARY':
            return action.payload;
        default:
            return state;
    }
}

export default summaryReducer;