import React, { Component } from 'react';
import { connect } from 'react-redux';


class Summary extends Component {

   

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
                </div>

        )
    }

}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Summary);