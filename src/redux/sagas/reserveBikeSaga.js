import Axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';


function* reserveBikeSaga() {
    yield takeEvery('SHOW_BIKE', addBikeToReserve);
}
function* addBikeToReserve(action) {
    try {
        console.log('in addBike', action);
        const response = yield Axios.get(`/bikes/reserve?bike_id=${action.payload}`);
        yield put({ type: 'SET_RESERVE_BIKE', payload: response.data });
    } catch (error) {
        console.log('Error adding bike to reservation.', error);
        alert('Could not add bike to reservation. Try again later.');
    }
}




export default reserveBikeSaga;