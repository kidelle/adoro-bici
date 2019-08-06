import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


class SlideShow extends Component {

    render() {
        return (
            <>
           
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

export default SlideShow;