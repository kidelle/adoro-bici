import Axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';


function* reservationSaga() {
    yield takeEvery('SET_BIKES', addReservation);
}
function* addReservation() {
    try {
        const response = yield Axios.get('/bikes');
        yield put({ type: 'SET_BIKES', payload: response.data });
    } catch (error) {
        console.log('Error getting bikes.', error);
        alert('Could not get Bikes at this time. Try again later.');
    }
}




export default reservationSaga;