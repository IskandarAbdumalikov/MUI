import React from "react";
import { Typography, Container, TextField, Button } from "@mui/material";
import "./contact.scss";

const Contact = () => {
  return (
    <Container className="contact">
      <Typography variant="h2" className="contact__heading">
        Contact Us
      </Typography>
      <form className="contact__form">
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          className="contact__input"
        />
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          className="contact__input"
        />
        <TextField
          id="message"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          className="contact__input"
        />
        <Button variant="contained" color="primary" className="contact__button">
          Send
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
