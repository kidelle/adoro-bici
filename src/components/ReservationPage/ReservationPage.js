import React, { Component } from 'react';


class ReservationPage extends Component {

    componentDidMount() {
        const action = { type: 'SET_RESERVATION' };
        this.props.dispatch(action);
    }




}
export default ReservationPage;