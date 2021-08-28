import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import VisibilityIcon from "@material-ui/icons/Visibility";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Button, Divider } from "@material-ui/core";
import soprtMedia from "../../img/sports meida.JPG";
import quicktics from "../../img/quicktics.JPG";
import hotelGallary from "../../img/hotel gallary.JPG";
import "./Portfolio.css";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: "#3f51b5",
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  return (
    <div>
      <div className="portfolio-container">
        <div>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  S
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Sports Media"
            />
            <CardMedia
              className={classes.media}
              image={soprtMedia}
              title="Soprt Media"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>You can know all premier league club info. </strong>
                <Divider style={{ margin: 10 }}></Divider>
                Key Technology: React, React Router, React Hooks.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Button
                color="secondary"
                href="https://sports-media01.netlify.app/"
              >
                <VisibilityIcon />
              </Button>
              <Button
                color="secondary"
                href="https://github.com/marufhosen/react-router-sportMedia"
              >
                <GitHubIcon />
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  Q
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Quick Tics"
            />
            <CardMedia
              className={classes.media}
              image={quicktics}
              title="Quick Tics"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>You can buy ticket to go anywhere.</strong>
                <Divider style={{ margin: 10 }}></Divider>
                Key Technology: React, Firabese Authentication, Firebase hosting
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Button color="secondary" href="https://quick-ticket-307.web.app">
                <VisibilityIcon />
              </Button>
              <Button
                color="secondary"
                href="https://github.com/marufhosen/quick-ticks"
              >
                <GitHubIcon />
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  H
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Hotel Gallary"
            />
            <CardMedia
              className={classes.media}
              image={hotelGallary}
              title="Hotel Gallary"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Authentic user can book hotel room </strong>
                <Divider style={{ margin: 10 }}></Divider>
                Key Technology: React,Form Validayion, Firabese Authentication,
                Firebase hosting
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Button color="secondary" href="https://hotel-gallary.web.app/">
                <VisibilityIcon />
              </Button>
              <Button
                color="secondary"
                href="https://github.com/marufhosen/hotel-booking-auth"
              >
                <GitHubIcon />
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
      <div className="more-project">
        <Button
          href="https://github.com/marufhosen"
          variant="contained"
          color="primary"
        >
          MORE PROJECT
        </Button>
      </div>
    </div>
  );
};

export default Portfolio;
