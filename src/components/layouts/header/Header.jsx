import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  TextField,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./header.scss";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawer = (
    <div
      className="drawer"
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Home", "About", "Blog", "Service"].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar className="header">
      <Toolbar className="header__toolbar container">
        <Typography variant="h6" className="header__logo">
          LOGO
        </Typography>
        <Grid className="form" container alignItems="center" spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <form action="" className="header__form">
              <TextField
                type="text"
                label="Search"
                variant="outlined"
                className="header__input"
              />
              <Button variant="contained" href="#">
                Search
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} sm={6} md={8} container justifyContent="flex-end">
            <div className="header__links">
              <Button variant="contained" href="#">
                Home
              </Button>
              <Button variant="contained" href="#">
                About
              </Button>
              <Button variant="contained" href="#">
                Blog
              </Button>
              <Button variant="contained" href="#">
                Service
              </Button>
            </div>

            <IconButton
              edge="end"
              variant="contained"
              aria-label="menu"
              className="header__menuButton"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {drawer}
            </Drawer>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
