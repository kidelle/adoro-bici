import React, { Component } from 'react';
import SlideShow from '../SlideShow/SlideShow';
import { connect } from 'react-redux';


class FindBike extends Component {

    componentDidMount() {
        const action = { type: 'FETCH_BIKES' };
        this.props.dispatch(action);
        console.log(this.props.reduxState)
    }

    render() {
        return (
            <div className="App">
                <header>
                    <h1>Find a Bike!!!</h1>
                    <SlideShow history={this.props.history}/>
                </header>
            </div>
        )
    }

}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(FindBike);