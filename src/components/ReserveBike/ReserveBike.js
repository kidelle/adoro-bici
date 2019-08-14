import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Calendar from 'react-calendar';



const styles = muiBaseTheme => ({
    card: {
        maxWidth: 500,
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

class ReserveBike extends Component {

    state = {
        date: new Date(),
        duration: 0,
    }

    handleChange = (event) => {
        console.log(event)
        this.setState ({
            date: event
        });
    }

    durationChange = (event) => {
        this.setState({
            duration: event.target.value
        });
    }

    nextPage = (event) => {
        
        this.props.dispatch({ type: 'CURRENT_SUMMARY', payload: this.state});
        this.props.history.push('/summary');
    }
 
    render () {
        const { classes } = this.props;
        
        return (
            <>
            {this.props.reduxState.reserveBike ?                
                this.props.reduxState.reserveBike.map((bikes, i) => 
                <>
                <header>
                    <h1>Reservation Page</h1>
                 </header>
            
            
              <Card key={i} className={classes.card}>
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
                    </CardContent>
                    </CardActionArea>
                    </Card>
                        <h1>Choose a date to reserve this bike.</h1>
                        <div>
                            <Calendar
                                onChange={(event) => this.handleChange(event)}
                                value={this.state.date}
                            />
                        </div>
                        <h1>Choose a duration for your bike rental.</h1>
                        <div>
                        <select value={this.state.duration} onChange={(event) => this.durationChange(event)}>
                            <option value="0">Select Duration</option>
                            <option value="1">1 Hour</option>
                            <option value="4">4 Hours</option>
                            <option value="8">8 Hours</option>
                            <option value="16">All Day</option>
                            </select>
                        
                        <Button onClick={(event) => this.nextPage(event, bikes)} type="submit" size="large" color="primary">
                            Complete Reservation
                        </Button>
                        </div>
                 
            </>
            
                )
            :
            <></>}
            </> 
            
        )
        
       
    
    }


}


const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default withStyles(styles)(connect(mapReduxStateToProps)(ReserveBike));
