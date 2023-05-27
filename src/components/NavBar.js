import { Grid, IconButton } from "@mui/material";
import React, { useState } from "react";

const NavBar = () => {
  const [k, setStyleK] = useState({});
  const navOptions = [
    "Home",
    "Sell",
    "Buy",
    "Service",
    "Lease",
    "Hostel/Pg",
    "More",
  ];
  return (
    <Grid
      container
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid item xs={2}>
        <img src="Images/logo.png" alt="logo" width="181px" />
      </Grid>
      <Grid item xs={6}>
        <div
          style={{
            margin: "10px auto",
            display: "flex",
            justifyContent: "end",

            color: "#015474",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          {navOptions.map((item) => {
            if (item === "Home") {
              return (
                <div
                  style={{
                    padding: "8px",
                    fontSize: "16px",
                    fontWeight: "900",
                    // color: "Black",
                  }}
                >
                  {item}
                </div>
              );
            } else {
              return <div style={{ padding: "8px" }}>{item}</div>;
            }
          })}
        </div>
      </Grid>
      <Grid item xs={4}>
        <Grid
          container
          display={"flex"}
          justifyContent={"right"}
          alignItems={"right"}
        >
          <Grid item xs={3}>
            <IconButton
              style={{
                color: "#015474",
                fontSize: "14px",
                fontWeight: "600",
                padding: "8px 30px",
                border: "2px solid #03b6c3",
                borderRadius: "40px",
                marginRight: "10px",
                textAlign: "center",
              }}
            >
              Log In
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <IconButton
              style={{
                color: "#015474",
                fontSize: "14px",
                fontWeight: "600",
                padding: "8px 30px",
                textAlign: "center",
                border: "2px solid #03b6c3",
                borderRadius: "40px",
                background: "linear-gradient(to Right, #76d9a8, #85d6f0)",
                marginRight: "10px",
              }}
            >
              Post Property
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NavBar;
