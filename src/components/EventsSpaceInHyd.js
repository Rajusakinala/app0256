import { Button, Grid } from "@mui/material";
import React from "react";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import PoolIcon from "@mui/icons-material/Pool";
import ElevatorIcon from "@mui/icons-material/Elevator";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
const EventSpaceInHyd = () => {
  return (
    <div>
      <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid item>
          <h3>Event Space in Hyderabad</h3>
        </Grid>
        <Grid item>
          <Button>View all...</Button>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6} md={3}>
          <img width="100%" src="Images/eventSpace.png" alt="" />
          <h5>
            <StarIcon style={{ fill: "gold" }} />
            <StarIcon style={{ fill: "gold" }} />
            <StarIcon style={{ fill: "gold" }} />
            <StarIcon style={{ fill: "gold" }} />
            <StarHalfIcon style={{ fill: "gold" }} />
          </h5>
          <h5>Swagath Residency</h5>
          <p>3BHK, Gachibouwli</p>
          <Grid container spacing={1} sx={{ fontWeight: "light" }}>
            <Grid item>
              <DirectionsCarFilledIcon /> Car parking,
            </Grid>
            <Grid item>
              <ElevatorIcon />
              Lift,
            </Grid>
            <Grid item>
              <PoolIcon />
              Swimming Pool
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} md={3}>
          <img width="100%" src="Images/eventSpace.png" alt="" />
          <h5>
            <StarIcon style={{ fill: "gold" }} />
            <StarIcon style={{ fill: "gold" }} />
            <StarIcon style={{ fill: "gold" }} />
            <StarIcon style={{ fill: "gold" }} />
            <StarHalfIcon style={{ fill: "gold" }} />
          </h5>
          <h5>Raj Kamal palace</h5>
          <p>3BHK, Gachibouwli</p>
          <Grid container spacing={1} sx={{ fontWeight: "light" }}>
            <Grid item>
              <DirectionsCarFilledIcon /> Car parking,
            </Grid>
            <Grid item>
              <ElevatorIcon />
              Lift,
            </Grid>
            <Grid item>
              <PoolIcon />
              Swimming Pool
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} md={3}>
          <img width="100%" src="Images/eventSpace.png" alt="" />
          <h5>
            <StarIcon style={{ fill: "gold" }} />
            <StarIcon style={{ fill: "gold" }} />
            <StarIcon style={{ fill: "gold" }} />
            <StarIcon style={{ fill: "gold" }} />
            <StarHalfIcon style={{ fill: "gold" }} />
          </h5>
          <h5>VMR Conventional hall</h5>
          <p>3BHK, Gachibouwli</p>
          <Grid container spacing={1} sx={{ fontWeight: "light" }}>
            <Grid item>
              <DirectionsCarFilledIcon /> Car parking,
            </Grid>
            <Grid item>
              <ElevatorIcon />
              Lift,
            </Grid>
            <Grid item>
              <PoolIcon />
              Swimming Pool
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} md={3}>
          <img width="100%" src="Images/eventSpace.png" alt="" />
          <h5>
            <StarIcon style={{ fill: "gold" }} />
            <StarIcon style={{ fill: "gold" }} />
            <StarIcon style={{ fill: "gold" }} />
            <StarIcon style={{ fill: "gold" }} />
            <StarHalfIcon style={{ fill: "gold" }} />
          </h5>
          <h5>Morden Villa with Pool</h5>
          <p>3BHK, Gachibouwli</p>
          <Grid container spacing={1} sx={{ fontWeight: "light" }}>
            <Grid item>
              <DirectionsCarFilledIcon /> Car parking,
            </Grid>
            <Grid item>
              <ElevatorIcon />
              Lift,
            </Grid>
            <Grid item>
              <PoolIcon />
              Swimming Pool
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default EventSpaceInHyd;
