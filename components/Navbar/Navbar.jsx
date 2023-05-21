import React, { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import {
  Instagram,
  Inbox,
  GitHub,
  LinkedIn,
  YouTube,
  Twitter,
  Menu,
} from "@mui/icons-material";
import {
  AppBar,
  Container,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";

const list = () => {
  return (
    <List>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="Testing" />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

const Navbar = () => {
  const [isOn, setIsOn] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleToggleDrawer = () => {
    setOpenDrawer((preValue) => !preValue);
  };

  const handleThemeSwitch = () => {
    setIsOn((preValue) => !preValue);
  };

  return (
    <Container>
      <AppBar color="transparent" elevation={0}>
        <Container>
          <Box
            sx={{
              height: "97px",
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Grid container>
              <Grid item xs={2}>
                <ThemeSwitch switchStatus={isOn} clicked={handleThemeSwitch} />
              </Grid>
              <Grid
                item
                xs={7}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="text"
                  size="small"
                  sx={{
                    textTransform: "none",
                    color: "gray",
                    fontSize: 15,
                    marginRight: { sm: 2, md: 5 },
                    "&:hover": {
                      color: "#007ACC",
                    },
                  }}
                >
                  Home
                </Button>
                <Button
                  variant="text"
                  size="small"
                  sx={{
                    textTransform: "none",
                    fontSize: 15,
                    marginRight: { sm: 2, md: 5 },
                    color: "gray",
                    "&:hover": {
                      color: "#007ACC",
                    },
                  }}
                >
                  Certificates
                </Button>
                <Button
                  variant="text"
                  size="small"
                  sx={{
                    textTransform: "none",
                    fontSize: 15,
                    color: "gray",
                    "&:hover": {
                      color: "#007ACC",
                    },
                  }}
                >
                  Work
                </Button>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <IconButton
                  sx={{
                    marginRight: 1.5,
                    cursor: "pointer",
                    "&:hover": { color: "#007ACC" },
                  }}
                >
                  <GitHub fontSize="small" />
                </IconButton>
                <IconButton
                  sx={{
                    marginRight: 1.5,
                    cursor: "pointer",
                    "&:hover": { color: "#007ACC" },
                  }}
                >
                  <LinkedIn fontSize="small" />
                </IconButton>
                <IconButton
                  sx={{
                    marginRight: 1,
                    cursor: "pointer",
                    "&:hover": { color: "#007ACC" },
                  }}
                >
                  <Instagram fontSize="small" />
                </IconButton>
                <IconButton
                  sx={{
                    marginRight: 1,
                    cursor: "pointer",
                    "&:hover": { color: "#007ACC" },
                  }}
                >
                  <YouTube fontSize="small" />
                </IconButton>
                <IconButton
                  sx={{
                    cursor: "pointer",
                    "&:hover": { color: "#007ACC" },
                  }}
                >
                  <Twitter fontSize="small" />
                </IconButton>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <Grid container sx={{ height: "70px" }}>
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Menu onClick={handleToggleDrawer} sx={{ cursor: "pointer" }} />
                <Typography marginLeft={1}>Menu</Typography>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <ThemeSwitch switchStatus={isOn} clicked={handleThemeSwitch} />
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Box
          sx={{
            height: "2px",
            background:
              "radial-gradient(50% 75078.13% at 50% 50.01%, #F5F5F5 0%, rgba(245, 245, 245, 0) 100%)",
          }}
        ></Box>
      </AppBar>

      {/*Below is Drawer section of the navbar */}
      <Drawer
        anchor="left"
        open={openDrawer}
        hideBackdrop={true}
        PaperProps={{
          sx: {
            background: "rgba(31, 31, 31, 0.39)",
            borderRadius: "5px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(2px)",
          },
        }}
      >
        <Box
          sx={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          role="presentation"
          onClick={handleToggleDrawer}
        >
          {list()}
        </Box>
      </Drawer>
    </Container>
  );
};

export default Navbar;
