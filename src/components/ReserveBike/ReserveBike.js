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
