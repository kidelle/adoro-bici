import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Axios from 'axios';


class Summary extends Component {

    handleSubmit = (event) => {
         this.props.history.push('/user');
        let payload = {
            date: this.props.reduxState.summary.date,
            duration: this.props.reduxState.summary.duration,
            bikeId: this.props.reduxState.reserveBike.id   
        }
        
        Axios.post('/bikes/user', payload)
        .then( response => {
            this.props.dispatch({ type: 'SET_ORDER', payload: response.data });
        })
        .catch( error => {
            alert('Could not confirm reservation at this time. Try again later.');
            console.log('Error on POST', error);
        })
    }

    

    render() {
        return (
            <div className="App">
                <header>
                    <h1>Reservation Summary</h1>
                    </header>
                    <div>
                    <pre>{JSON.stringify(this.props.reduxState, null, 2)}</pre>
                    <p>{JSON.stringify(this.props.reduxState.summary.date)}</p>
                    <p>{this.props.reduxState.summary.duration}</p>
                        </div>
                        <div>
                    <Button onClick={(event) => this.handleSubmit(event)} type="submit" size="large" color="primary">
                        Confirm Reservation
                        </Button>
                        </div>
                </div>

        )
    }

}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Summary);