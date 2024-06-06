import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import "./hero.scss";

const Hero = () => {
  return (
    <Box className="hero-section">
      <Container>
        <Box className="hero-content">
          <Typography variant="h2" component="h1" gutterBottom>
            Hello everyone
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
           This is my first webSite which created by MUI.And my name is Iskandar
          </Typography>
          <Button className="hero-button" variant="contained" size="large">
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
