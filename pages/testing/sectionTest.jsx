import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import pic from "../../public/images/coding-event.jpg";
import uiPic from "../../public/images/UiPath.jpg";
import reactPic from "../../public/images/newReact-removebg-preview.png";

const Item = ({ name, date, picture, height }) => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Card sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        <CardContent>
          <Typography variant="body1" component="div">
            {name}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
          >
            {date}
          </Typography>
        </CardContent>
      </Box>
      {!match ? (
        <CardMedia
          component="img"
          sx={{ width: 151, display: "none" }}
          image={picture}
        />
      ) : (
        <CardMedia
          component="img"
          sx={{ width: 151, height: 151 }}
          image={picture}
        />
      )}
    </Card>
  );
};

const sectionTest = () => {
  return (
    <Container sx={{ marginTop: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item
            name="Front-end Library"
            date="March 2020"
            picture={uiPic.src}
          />
        </Grid>
        <Grid item xs={4}>
          <Item
            name="JavaScript-ES6"
            date="April 2021"
            picture={reactPic.src}
            height="151"
          />
        </Grid>
        <Grid item xs={4}>
          <Item name="UiPoint RPA" date="June 2020" picture={pic.src} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default sectionTest;
