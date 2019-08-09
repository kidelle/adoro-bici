import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReserveButton extends Component {

    nextPage = () => { 
        console.log('clicked nextPage button');
        this.props.dispatch({ type: 'SET_BIKE ', payload: 'hi'});  
        this.props.history.push ('/reserve');
}


    render() {
        return (
            <>
            <h1>Reservation Page</h1>
            <section>
                    <button onClick={(event) => this.nextPage()} type="submit">Reserve This Bike</button>
            </section>
            </>
    
)

    
}

}

export default connect(ReserveButton);