import React from "react";
import { Box, Typography, Container, Grid, Link } from "@mui/material";
import "./footer.scss";

const Footer = () => {
  return (
    <Box className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box className="footer__section">
              <Typography variant="h6" className="footer__title">
                About Us
              </Typography>
              <Typography className="footer__text">
                We are committed to providing the best products and services.
                Our team is dedicated to your satisfaction.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box className="footer__section">
              <Typography variant="h6" className="footer__title">
                Quick Links
              </Typography>
              <Link href="#" className="footer__link">
                Home
              </Link>
              <Link href="#" className="footer__link">
                About
              </Link>
              <Link href="#" className="footer__link">
                Blog
              </Link>
              <Link href="#" className="footer__link">
                Services
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box className="footer__section">
              <Typography variant="h6" className="footer__title">
                Contact Us
              </Typography>
              <Typography className="footer__text">
                Email: info@company.com
              </Typography>
              <Typography className="footer__text">
                Phone: +123 456 7890
              </Typography>
              <Box className="footer__social">
                <Link href="#" className="footer__social__icon">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="#" className="footer__social__icon">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="#" className="footer__social__icon">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link href="#" className="footer__social__icon">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box className="footer__bottom">
        <Typography variant="body2" className="footer__bottom__text">
          © 2024 Your Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
