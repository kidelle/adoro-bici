import { takeEvery, put } from 'redux-saga/effects';


function* summarySaga() {
    yield takeEvery('CURRENT_SUMMARY', currentSummary);
}
function* currentSummary(action) {
    try {
        console.log('in currentSummary', action);
        yield put({ type: 'SET_SUMMARY', payload: action.payload });
    } catch (error) {
        console.log('Error adding bike to reservation.', error);
        alert('Could not add bike to reservation. Try again later.');
    }
}




export default summarySaga;