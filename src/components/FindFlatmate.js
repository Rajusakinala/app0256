import { Grid } from "@mui/material";
import React from "react";

const FindFlatmate = () => {
  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid item xs={4}>
        <div style={{ paddingTop: "40%" }}>
          <div style={{ paddingBottom: "20px" }}>
            <h2>Find your flatmate</h2>
          </div>
          <div style={{ paddingBottom: "30px" }}>
            <span>
              Book play grounds to improve your Sports skills at your nearby
              places.
            </span>
          </div>

          <div>
            <button
              style={{
                padding: "5px 30px",
                border: "1px solid white",
                borderRadius: "15px",
                backgroundColor: "#7ED7CF",
              }}
            >
              Find
            </button>
          </div>
        </div>
      </Grid>
      <Grid item xs={8}>
        <img width="100%" src="Images/girls3.png" alt="" />
      </Grid>
    </Grid>
  );
};

export default FindFlatmate;
