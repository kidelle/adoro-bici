import React, { Component } from 'react';
import SlideShow from '../SlideShow/SlideShow';


class FindBike extends Component {


    render() {
        return (
            <div className="App">
                <header>
                    <h1>Find a Bike!!!</h1>
                    <SlideShow />
                </header>
            </div>
        )
    }

}

export default FindBike;