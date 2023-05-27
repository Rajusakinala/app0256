import { Grid, IconButton } from "@mui/material";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const RentServices = () => {
  return (
    <div style={{ position: "relative", backgroundColor: "lightgray" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          top: "50%",
          left: "10px",
        }}
      >
        <div>
          <IconButton style={{ transform: "scale(4)" }}>
            <ChevronLeftIcon style={{ fill: "white" }} />
          </IconButton>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          top: "50%",
          right: "10px",
        }}
      >
        <div>
          <IconButton style={{ transform: "scale(4)" }}>
            <ChevronRightIcon style={{ fill: "white" }} />
          </IconButton>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={8} sx={{ p: 2 }}>
          <img width="100%" src="Images/rentService.png" alt="" />
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              paddingTop: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              //   alignItems: "start",
            }}
          >
            <div>
              <h2 style={{}}>Rent Services</h2>
            </div>
            <div>
              <h5>
                Book play grounds to improve your Sports Skills at your nearBy
                places
              </h5>
            </div>
            <div>
              <div
                style={{
                  width: "130px",
                  color: "#015474",
                  fontSize: "14px",
                  fontWeight: "600",
                  padding: "8px 30px",

                  border: "2px solid #03b6c3",
                  borderRadius: "40px",
                  background: "linear-gradient(to Right, #76d9a8, #85d6f0)",
                  marginRight: "10px",
                  hover: "pointer",
                }}
                //   onMouseOver={() => {
                //     setStyleK({ cursor: "pointer" });
                //   }}
              >
                Book Now
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default RentServices;
