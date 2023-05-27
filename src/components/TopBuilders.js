import { Button, Grid } from "@mui/material";
import React from "react";

const TopBuilders = () => {
  return (
    <div>
      <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid item>
          <h3>Top Builders</h3>
        </Grid>
        <Grid item>
          <Button>View all...</Button>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6} md={3} style={{ position: "relative" }}>
          <img width="100%" src="Images/hall.png" alt="" />
          <p
            style={{
              color: "white",
              position: "absolute",
              bottom: "5%",
              left: "10%",
            }}
          >
            Aparna Constructions
          </p>
        </Grid>
        <Grid item xs={6} md={3} style={{ position: "relative" }}>
          <img width="100%" src="Images/hall.png" alt="" />
          <p
            style={{
              color: "white",
              position: "absolute",
              bottom: "5%",
              left: "10%",
            }}
          >
            Aparna Constructions
          </p>
        </Grid>
        <Grid item xs={6} md={3} style={{ position: "relative" }}>
          <img width="100%" src="Images/hall.png" alt="" />
          <p
            style={{
              color: "white",
              position: "absolute",
              bottom: "5%",
              left: "10%",
            }}
          >
            Aparna Constructions
          </p>
        </Grid>
        <Grid item xs={6} md={3} style={{ position: "relative" }}>
          <img width="100%" src="Images/hall.png" alt="" />
          <p
            style={{
              color: "white",
              position: "absolute",
              bottom: "5%",
              left: "10%",
            }}
          >
            Aparna Constructions
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default TopBuilders;
