import { Button, Grid, IconButton } from "@mui/material";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const FindHostel = () => {
  return (
    <div
      style={{
        padding: "10px",
        position: "relative",
        // backgroundColor: "lightgray",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          top: "45%",
          left: "10px",
          zIndex: 9999,
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
          top: "45%",
          right: "10px",
          zIndex: 9999,
        }}
      >
        <div>
          <IconButton style={{ transform: "scale(4)" }}>
            <ChevronRightIcon style={{ fill: "white" }} />
          </IconButton>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h4>Find a Hostel/Pg/Co-Living near you</h4>
        </div>
        <div>
          <Button>View All..</Button>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3} sx={{ position: "relative" }}>
          <img width="100%" src="Images/student.jpg" alt="" />
          <div
            style={{
              color: "white",
              position: "absolute",
              bottom: "10%",
              left: "10%",
            }}
          >
            <h4>Hostel for Girls</h4>
            <h6>1028 Properties</h6>
          </div>
        </Grid>
        <Grid item xs={6} md={3} sx={{ position: "relative" }}>
          <img width="100%" src="Images/student.jpg" alt="" />
          <div
            style={{
              color: "white",
              position: "absolute",
              bottom: "10%",
              left: "10%",
            }}
          >
            <h4>Hostel for Girls</h4>
            <h6>1028 Properties</h6>
          </div>
        </Grid>
        <Grid item xs={6} md={3} sx={{ position: "relative" }}>
          <img width="100%" src="Images/student.jpg" alt="" />
          <div
            style={{
              color: "white",
              position: "absolute",
              bottom: "10%",
              left: "10%",
            }}
          >
            <h4>Hostel for Girls</h4>
            <h6>1028 Properties</h6>
          </div>
        </Grid>
        <Grid item xs={6} md={3} sx={{ position: "relative" }}>
          <img width="100%" src="Images/student.jpg" alt="" />
          <div
            style={{
              color: "white",
              position: "absolute",
              bottom: "10%",
              left: "10%",
            }}
          >
            <h4>Hostel for Girls</h4>
            <h6>1028 Properties</h6>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FindHostel;
