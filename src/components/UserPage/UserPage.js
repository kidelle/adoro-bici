import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

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



// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component {

  componentDidMount(){
    this.props.dispatch({type: 'FETCH_RENTALS'})
  }

  handleChange = (rental) => {
    console.log('In DELETE for reservation');
    this.props.dispatch({ type: 'DELETE_RESERVATION', payload: rental })
  }

  handleUpdate = (rental) => {
    console.log('In EDIT for reservation');
    this.props.dispatch({ type: 'EDIT_RENTALS', payload: rental })
    this.props.history.push('/edit');
  }


  render() {
    const { classes } = this.props;

    let bikes = this.props.reduxState.reserveBike
    return (

      <div>
        <h1 id="welcome">
          Welcome, {this.props.reduxState.user.username}!
        </h1>
        <div>
          <h1>Rental History</h1>
        </div>
        <div>
          {this.props.reduxState.rentals.map(item =>

            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={
                    item.image
                  }
                />
                <CardContent className={classes.content}>
                  <Typography
                    className={"MuiTypography--heading"}
                    variant={"h6"}
                    gutterBottom
                  >
                    {item.description}
                  </Typography>
                  <Typography
                    className={"MuiTypography--subheading"}
                    variant={"caption"}
                  >
                    {item.bike_size}
                  </Typography>
                  <Typography
                    className={"MuiTypography--subheading"}
                    variant={"caption"}
                  >       <br></br>
                    {item.rental_rate}
                  </Typography>
                  <Typography
                    className={"MuiTypography--subheading"}
                    variant={"caption"}
                  > <br></br>
                    {item.rental_start}
                  </Typography>
                  <Typography
                    className={"MuiTypography--subheading"}
                    variant={"caption"}
                  > <br></br>
                    {item.duration}
                  </Typography>
                </CardContent>
              </CardActionArea>
    
              <CardActions>
                <Button variant="contained" onClick={() => this.handleUpdate(item)} type="submit" size="large" color="secondary">
                  Edit
                        </Button>
                <Button variant="contained" onClick={() => this.handleChange(item)} type="submit" size="large" color="secondary">
                  Delete
                        </Button>
              </CardActions>
            </Card>
          )}
          <p>{JSON.stringify(this.props.reduxState.summary.date)}</p>
          <p>{this.props.reduxState.summary.duration}</p>
        </div>
        <div></div>
        
       
        <p>Your ID is: {this.props.reduxState.user.id}</p>
        <LogOutButton className="log-in" />
      </div>



    );

  }
}


// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = reduxState => ({
  reduxState,
});

// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(UserPage));
