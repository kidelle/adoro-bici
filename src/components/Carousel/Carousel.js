import React, { Component } from 'react';


class Carousel extends Component {



nextBike = () => {
    const newIndex = this.state.bike.index+1;
    this.setState({
        bike: data.bikes[newIndex]
    })
}

prevBike = () => {
    const newIndex = this.state.bike.index-1;
    this.setState({
        bike: data.bikes[newIndex]
    })
}



}

export default Carousel;