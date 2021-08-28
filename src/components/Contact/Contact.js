import React from "react";
import { TextField, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useState } from "react";
import Alert from "@material-ui/lab/Alert";

const Contact = () => {
  const [comment, setComment] = useState(false);
  return (
    <div>
      <Typography variant="h4">Get In Touch</Typography>
      <Typography style={{ marginTop: 30, marginBottom: 20 }}>Name</Typography>
      <TextField
        style={{ width: 500 }}
        id="outlined-basic"
        label="Name"
        variant="outlined"
      />
      <Typography style={{ marginTop: 30, marginBottom: 20 }}>Email</Typography>
      <TextField
        style={{ width: 500 }}
        id=""
        label="Email"
        variant="outlined"
      />
      <Typography style={{ marginTop: 30, marginBottom: 20 }}>
        Comment
      </Typography>
      <TextField
        style={{ width: 500 }}
        id=""
        label="Comment"
        variant="outlined"
      />
      <br />

      <Button
        onClick={() => setComment(true)}
        style={{ marginTop: 60 }}
        color="primary"
        variant="contained"
      >
        Submit
      </Button>
      {comment && (
        <Alert severity="success">
          Thanks for your opinion — check it out!
        </Alert>
      )}
    </div>
  );
};

export default Contact;
