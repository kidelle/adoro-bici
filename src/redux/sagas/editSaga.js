import Axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import Swal from 'sweetalert2';


function* editSaga() {
    yield takeEvery('EDIT_RESERVATION', editReservation);
}
function* editReservation(action) {
    try {
        yield Axios.put(`/bikes/${action.payload.id}`, action.payload);
        yield put({ type: 'FETCH_RENTALS' });
        Swal.fire(
            'Success!',
            'Your reservation has been updated!',
            'success'
        )
    } catch (error) {
        console.log('Error editing reservation.', error);
        alert('Could not EDIT reservation at this time. Try again later.');
    }
}




export default editSaga;