import Axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';


function* removerSaga() {
    yield takeEvery('DELETE_RESERVATION', removeReservation);
}
function* removeReservation(action) {
    try {
       yield Axios.delete(`/bikes/${action.payload.id}`);
        yield put({ type: 'FETCH_RENTALS' });
    } catch (error) {
        console.log('Error delting reservation.', error);
        alert('Could not delete reservation at this time. Try again later.');
    }
}




export default removerSaga;