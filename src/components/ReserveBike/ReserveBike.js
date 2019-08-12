import React, { Component } from 'react';
import { connect } from 'react-redux';


class ReserveBike extends Component {


 
    render () {
        
        
        return (
            <div className="App">
                <header>
                    <h1>Reservation Page</h1>
                 </header>
                {this.props.reduxState.reserveBike ? 
                <><p>{this.props.reduxState.reserveBike.description}
                {this.props.reduxState.reserveBike.bike_size}
                {this.props.reduxState.reserveBike.rental_rate}
                        <img src={this.props.reduxState.reserveBike.image} />
                </p></> 
              
                  
                :
                <></>}
                {/*JSON.stringify(this.props.reduxState.reserveBike)*/}
            </div>
        )
    }


}


const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(ReserveBike);