import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';


const styles = muiBaseTheme => ({
    card: {
        maxWidth: 300,
        margin: muiBaseTheme.spacing.unit,
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    },
    media: {
        paddingTop: "56.25%"
    },
    content: {
        textAlign: "left",
        padding: muiBaseTheme.spacing.unit * 3
    },
    divider: {
        margin: `${muiBaseTheme.spacing.unit * 3}px 0`
    },
    heading: {
        fontWeight: "bold"
    },
    subHeading: {
        lineHeight: 1.8
    },
   
});
class SlideShow extends Component {



    render() {
        console.log(this.props.reduxState.bikes)
        const { classes } = this.props;
        return (
            this.props.reduxState.bikes.map((bikes, i) =>


                <Card key={i} className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={
                            bikes.image
                        }
                    />
                    <CardContent className={classes.content}>
                        <Typography
                            className={"MuiTypography--heading"}
                            variant={"h6"}
                            gutterBottom

                        >
                            {bikes.description}
                        </Typography>
                        <Typography
                            className={"MuiTypography--subheading"}
                            variant={"caption"}
                        >
                            {bikes.size}
                        </Typography>
                        <Typography
                            className={"MuiTypography--subheading"}
                            variant={"caption"}
                        >
                            {bikes.rental_rate}
                        </Typography>

                    </CardContent>
                </Card>


            )

            // <CarouselProvider
            // naturalSlideWidth={100}
            // naturalSlideHeight={125}
            // totalSlides={3}>
            //     <ButtonBack>Back</ButtonBack>
            //     <ButtonNext>Next</ButtonNext>
            // <Slider>
            //     <Slide index={0}>Hi, I'm bike #1.</Slide>
            //     <Slide index={1}>Hi, I'm bike #2.</Slide>
            //     <Slide index={2}>Hi, I'm bike #3.</Slide>
            // </Slider>
            // </CarouselProvider>

        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default withStyles(styles)(connect(mapReduxStateToProps)(SlideShow));