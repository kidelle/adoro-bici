import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { connect } from 'react-redux';


class SlideShow extends Component {

    render() {
        console.log(this.props.reduxState.bikes)
        return (
            <>
           {this.props.reduxState.bikes.map((bikes, i) => {
               return (
               <div>
                   <p key={bikes.id}>{bikes.type}{bikes.description}{bikes.bike_size}{bikes.rental_rate} </p>
                       <img src={bikes.image} alt={bikes.description}/>
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