import { Grid } from "@mui/material";
import React from "react";

const CardImage = () => {
  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid item xs={4}>
        <div style={{ paddingTop: "40%" }}>
          <div style={{ paddingBottom: "20px" }}>
            <h2>Project sales Assistance</h2>
          </div>
          <div style={{ paddingBottom: "30px" }}>
            <span>Sell your property with NearLuk exclusive assistance</span>
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
              Go
            </button>
          </div>
        </div>
      </Grid>
      <Grid item xs={8}>
        <img width="100%" src="Images/handshake.png" alt="" />
      </Grid>
    </Grid>
  );
};

export default CardImage;
