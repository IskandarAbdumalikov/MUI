import React from "react";
import { Typography, Container, TextField, Button } from "@mui/material";
import "./login.scss";

const Login = () => {
  return (
    <Container className="login">
      <Typography variant="h2" className="login__heading">
        Login
      </Typography>
      <form className="login__form">
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          className="login__input"
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          className="login__input"
        />
        <Button variant="contained" color="primary" className="login__button">
          Log in
        </Button>
      </form>
    </Container>
  );
};

export default Login;
