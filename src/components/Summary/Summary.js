import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';


class Summary extends Component {

    nextPage = (event) => {

        this.props.dispatch({ type: 'SET_ORDER', payload: this.state });
        this.props.history.push('/user');
    }

    render() {
        return (
            <div className="App">
                <header>
                    <h1>Reservation Summary</h1>
                    </header>
                    <div>
                    <p>{JSON.stringify(this.props.reduxState.summary.date)}</p>
                    <p>{this.props.reduxState.summary.duration}</p>
                        </div>
                        <div>
                    <Button onClick={(event) => this.nextPage(event)} type="submit" size="large" color="primary">
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