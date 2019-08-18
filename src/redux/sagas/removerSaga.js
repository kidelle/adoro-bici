import Axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import Swal from 'sweetalert2';


function* removerSaga() {
    yield takeEvery('DELETE_RESERVATION', removeReservation);
}
function* removeReservation(action) {
    try {
       yield Axios.delete(`/bikes/${action.payload.id}`);
        yield put({ type: 'FETCH_RENTALS' });
        Swal.fire({
            title: 'Are you sure you want to delete your reservation?',
            text: "You won't be able to undo this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    } catch (error) {
        console.log('Error delting reservation.', error);
        alert('Could not delete reservation at this time. Try again later.');
    }
}




export default removerSaga;