import React from "react";
import marufImg from "../../img/Maruf.png";
import Typical from "react-typical";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import resume from "../../resume/Maruf Hosen.pdf";

const MainContent = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <img style={{ marginTop: "" }} src={marufImg} width="25%" alt="" />
      </div>
      <div style={{ marginTop: 20 }}>
        <Typography variant="h4" color="primary">
          Maruf Hosen
        </Typography>
        <Typography style={{ width: "50%", margin: "auto" }}>
          I am a person who is positive about every aspect of life. There are
          many things, i like to do, to see and to experience.
        </Typography>
        <Typical
          steps={[
            "Javascript Developer",
            1000,
            "Photographer",
            1000,
            "Blood-Group: A+(ve)",
            1000,
            "Javascript Developer",
            1000,
          ]}
          // loop={}
          wrapper="h3"
        />
        {/* <Button download="../../resume/Maruf Hosen.pdf" variant="contained">Downlode Resume</Button> */}
        <a style={{ textDecoration: "none" }} href={resume}>
          {" "}
          <Button
            download="../../resume/Maruf Hosen.pdf"
            variant="contained"
            color="primary"
          >
            Downlode Resume
          </Button>{" "}
        </a>
      </div>
    </div>
  );
};

export default MainContent;
