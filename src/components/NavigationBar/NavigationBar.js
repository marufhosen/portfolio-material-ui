import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import DescriptionIcon from "@material-ui/icons/Description";
import CreateIcon from "@material-ui/icons/Create";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Avatar } from "@material-ui/core";
import mlogo from "../../img/Momins.jpg";
import MainContent from "../MainContent/MainContent";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Blog from "../Blog/Blog";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#ffffff",
    color: "black",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  navPsn: {
    flexGrow: 1,
  },
}));

const NavigationBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon color="primary"></MenuIcon>
          </IconButton>
          <Avatar style={{ marginRight: 10 }} alt="Remy Sharp" src={mlogo} />
          <Typography className={classes.navPsn} variant="h6" noWrap>
            Maruf Hosen
          </Typography>
          <Typography variant="h6" noWrap>
            <IconButton
              color="primary"
              aria-label="Linkdib"
              href="https://www.linkedin.com/in/maruf-hosen-239028179/?fbclid=IwAR0boQbUTIJJMrtEVVcKGS5qu0fHh2B3ZG0HTYCHz28UZc6uWJv7YXT95Xk"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="gitHub"
              href="https://github.com/marufhosen"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="fb"
              href="https://web.facebook.com/marufmislam/"
            >
              <FacebookIcon />
            </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
            button
            component={Link}
            href="/home"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemIcon>{<HomeIcon color="primary"></HomeIcon>}</ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            component={Link}
            href="/about"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemIcon>{<InfoIcon color="primary"></InfoIcon>}</ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem
            button
            component={Link}
            href="/portfolio"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemIcon>
              {<DescriptionIcon color="primary"></DescriptionIcon>}
            </ListItemIcon>
            <ListItemText primary="Portfolio" />
          </ListItem>
          <ListItem
            button
            component={Link}
            href="/blog"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemIcon>
              {<CreateIcon color="primary"></CreateIcon>}
            </ListItemIcon>
            <ListItemText primary="Blog" />
          </ListItem>
          <ListItem
            button
            component={Link}
            href="/contact"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemIcon>
              {<ContactPhoneIcon color="primary"></ContactPhoneIcon>}
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div>
          <Router>
            <Switch>
              <Route path="/home">
                <MainContent></MainContent>
              </Route>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/contact">
                <Contact></Contact>
              </Route>
              <Route path="/portfolio">
                <Portfolio></Portfolio>
              </Route>
              <Route path="/blog">
                <Blog></Blog>
              </Route>
              <Route exact path="/">
                <MainContent></MainContent>
              </Route>
            </Switch>
          </Router>
        </div>
      </main>
    </div>
  );
};

export default NavigationBar;
