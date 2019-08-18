import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import Swal from 'sweetalert2';

const styles = muiBaseTheme => ({
    card: {
        maxWidth: 500,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "15px",
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
            Swal.fire(
                'Success!',
                'Your reservation has been confirmed!',
                'success'
            )
        })
        
        .catch( error => {
            alert('Could not confirm reservation at this time. Try again later.');
            console.log('Error on POST', error);
        })
    }

    

    render() {
        const { classes } = this.props;

        let bikes = this.props.reduxState.reserveBike
        return (
            <div className="App">
                <header>
                    <h1>Reservation Summary</h1>
                    </header>
                    <div>
                    <Card className={classes.card}>
                        <CardActionArea>
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
                                    {bikes.bike_size}
                                </Typography>
                                <Typography
                                    className={"MuiTypography--subheading"}
                                    variant={"caption"}
                                >       <br></br>
                                    {bikes.rental_rate}
                                </Typography>
                                {/* <Typography
                                    className={"MuiTypography--subheading"}
                                    variant={"caption"}
                                >
                                    {this.props.reduxState.summary.date}
                                </Typography>
                                <Typography
                                    className={"MuiTypography--subheading"}
                                    variant={"caption"}
                                >
                                    {this.props.reduxState.summary.duration}
                                </Typography> */}
                            </CardContent>
                        </CardActionArea>
                    </Card>
                   
                    <p>{JSON.stringify(this.props.reduxState.summary.date)}</p>
                    <p>{this.props.reduxState.summary.duration}</p>
                        </div>
                        <div>
                    <Button onClick={(event) => this.handleSubmit(event)} variant="contained" type="submit" size="large" color="primary">
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

export default withStyles(styles)(connect(mapReduxStateToProps)(Summary));
