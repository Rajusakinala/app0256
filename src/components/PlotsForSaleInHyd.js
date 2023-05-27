import { Button, Grid, Card } from "@mui/material";
import React from "react";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import PoolIcon from "@mui/icons-material/Pool";
import ElevatorIcon from "@mui/icons-material/Elevator";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
const PlotsForSaleInHyd = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h4>Plots for sale in Hyderabad</h4>
        </div>
        <div>
          <Button>View all...</Button>
        </div>
      </div>
      <Grid container spacing={2.5}>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 1 }}>
            <img width="100%" src="Images/plotsInHydCroped.png" alt="loading" />
            <h5>
              <StarIcon style={{ fill: "gold" }} />
              <StarIcon style={{ fill: "gold" }} />
              <StarIcon style={{ fill: "gold" }} />
              <StarIcon style={{ fill: "gold" }} />
              <StarHalfIcon style={{ fill: "gold" }} />
            </h5>
            <h5>TMR Group venture</h5>
            <p>250sqrds, Gachibouwli</p>
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
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 1 }}>
            <img width="100%" src="Images/plotsInHydCroped.png" alt="loading" />
            <h5>
              <StarIcon style={{ fill: "gold" }} />
              <StarIcon style={{ fill: "gold" }} />
              <StarIcon style={{ fill: "gold" }} />
              <StarIcon style={{ fill: "gold" }} />
              <StarHalfIcon style={{ fill: "gold" }} />
            </h5>
            <h5>TMR Group venture</h5>
            <p>250sqrds, Gachibouwli</p>
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
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 1 }}>
            <img width="100%" src="Images/plotsInHydCroped.png" alt="loading" />
            <h5>
              <StarIcon style={{ fill: "gold" }} />
              <StarIcon style={{ fill: "gold" }} />
              <StarIcon style={{ fill: "gold" }} />
              <StarIcon style={{ fill: "gold" }} />
              <StarHalfIcon style={{ fill: "gold" }} />
            </h5>
            <h5>TMR Group venture</h5>
            <p>250sqrds, Gachibouwli</p>
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
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default PlotsForSaleInHyd;
