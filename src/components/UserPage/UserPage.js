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
        <div></div>
        <Button variant="contained" type="submit" size="large" color="secondary">Edit</Button>
        <Button variant="contained" type="submit" size="large" color="secondary">Delete</Button>
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
