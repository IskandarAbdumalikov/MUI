import React from "react";
import { Typography, Container } from "@mui/material";
import "./about.scss";

const About = () => {
  return (
    <Container className="about">
      <header>
        <Typography variant="h2" className="about__heading">
          About Us
        </Typography>
      </header>
      <section className="about__info">
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
          nunc sed velit cursus, eget cursus nisi pulvinar. Nulla facilisi.
          Donec aliquet risus vitae velit tincidunt dapibus. Sed blandit ligula
          et risus condimentum, ac sodales odio scelerisque. Nullam non ligula
          eget magna malesuada malesuada. Sed sit amet justo a lorem placerat
          efficitur. Phasellus malesuada, odio in efficitur hendrerit, sem metus
          mollis eros, vel ullamcorper velit neque in turpis. Aenean efficitur
          risus quis ipsum feugiat, et commodo quam dignissim. Nam id interdum
          quam. Proin mattis interdum efficitur. Vestibulum quis tempor eros. In
          ultricies, libero ut fermentum porttitor, nisi mi vehicula orci, nec
          congue eros elit ut magna.
        </Typography>
        <Typography variant="body1">
          Integer euismod, purus eget volutpat ultricies, turpis dui elementum
          velit, vel rhoncus tellus sapien id metus. Fusce bibendum vestibulum
          enim vel feugiat. Nam dapibus nibh id velit vehicula, eu sollicitudin
          orci ultrices. Nulla facilisi. Mauris sit amet nunc id felis interdum
          elementum. Aenean facilisis erat odio, in vehicula mauris ultricies a.
          Vivamus in pretium nulla, at volutpat sem. Vestibulum volutpat justo
          eget metus feugiat ullamcorper. Mauris auctor libero sit amet odio
          dapibus, sit amet ornare quam aliquet. Suspendisse sit amet justo
          dapibus, placerat nunc eu, tincidunt justo.
        </Typography>
      </section>
      <footer>
        <Typography variant="body2" className="about__footer">
          Contact us for more information
        </Typography>
      </footer>
    </Container>
  );
};

export default About;
