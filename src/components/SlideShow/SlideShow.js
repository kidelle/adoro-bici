import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { connect } from 'react-redux';


class SlideShow extends Component {

    render() {
        console.log(this.props.reduxState.bikes)
        return (
            <>
           {this.props.reduxState.bikes.map((bike, i) => {
               return (
               <div>
                   <p key={bike.id}>{bike.type}{bike.description}{bike.bike_size}{bike.rental_rate} </p>
                       <img src='https://images.unsplash.com/photo-1495031178007-13cac321fbcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' alt={bike.description}/>
                </div>
       
                       )}
                   
                  )}
            <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            <Slider>
                <Slide index={0}>Hi, I'm bike #1.</Slide>
                <Slide index={1}>Hi, I'm bike #2.</Slide>
                <Slide index={2}>Hi, I'm bike #3.</Slide>
            </Slider>
            </CarouselProvider>
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(SlideShow);