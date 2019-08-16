import Axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';


function* rentalsSaga() {
    yield takeEvery('FETCH_RENTALS', fetchRentals);
}
function* fetchRentals() {
    try {
        const response = yield Axios.get('/bikes/rentals');
        console.log(response.data)
        yield put({ type: 'SET_RENTALS', payload: response.data });
    } catch (error) {
        console.log('Error getting rentals.', error);
        alert('Could not get Rental list at this time. Try again later.');
    }
}




export default rentalsSaga;