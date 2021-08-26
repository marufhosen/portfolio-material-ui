import React from "react";
import abimg from "../../img/Maruf2.jpg";
import "./About.css";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Divider } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: "600px",
  },
}));

const About = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div className="about-content">
      <div className="about-img">
        <img src={abimg} width="400" alt="" />
      </div>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="About" {...a11yProps(0)} />
            <Tab label="Biography" {...a11yProps(1)} />
            <Tab label="Education" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Typography>
              I am a punctual and motivated individual who is able to work in a
              busy environment and produce high standards of work. I am an
              excellent team worker and able to take instructions from all
              levels and build up good working relationships with all
              colleagues. I am flexible, reliable and possess excellent time
              keeping skills.
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Typography variant="h6">Birthdate</Typography>
            <small>28th November, 1998</small>
            <Divider></Divider>
            <Typography variant="h6">Age</Typography>
            <small>24 years old</small>
            <Divider></Divider>
            <Typography variant="h6">Address</Typography>
            <small>Nikunjo-2, Road 12/10</small>
            <Divider></Divider>
            <Typography variant="h6">Email</Typography>
            <small>marufislam319@gmail.com</small>
            <Divider></Divider>
            <Typography variant="h6">Phone</Typography>
            <small>+880 1716250651</small>
            <Divider></Divider>
            <Typography variant="h6">Frelance</Typography>
            <small>Available</small>
            <Divider></Divider>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Typography variant="h6">
              Daffodil International University
            </Typography>
            <p>Bachelor of science, Computer Science And Engineering </p>
            <small>CGPA: 3.30</small>
            <p>2017-2021</p>
            <Divider></Divider>
            <Typography variant="h6">Sristy College of Tangail</Typography>
            <p>HSC</p>
            <small>GPA: 4.81</small>
            <p>2014-2016</p>
            <Divider></Divider>
            <Typography variant="h6">
              Anwara Hashem Memo. High School
            </Typography>
            <p>SSC</p>
            <small>GPA: 4.83</small>
            <p>2012-2014</p>
          </TabPanel>
        </SwipeableViews>
      </div>
    </div>
  );
};

export default About;
