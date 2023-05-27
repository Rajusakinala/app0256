import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Carousel2() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{ padding: "5px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h3>
            <center>NearLuk Real Info</center>
          </h3>
        </div>
        <div>
          <Button>View all...</Button>
        </div>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item style={{ position: "relative" }}>
          <img
            className="d-block w-100"
            src="Images/plain.png"
            alt="First slide"
          />
          <Carousel.Caption
            style={{
              textAlign: "left",
              width: "500px",
              position: "absolute",
              bottom: "10%",
              left: "10%",
            }}
          >
            <h3>Why invest near hyderabad airport</h3>
            <p>Airport: AN Analysis 2023</p>
            <p>
              May 27th, 2023. By{" "}
              <span style={{ color: "yellow", fontWeight: "light" }}>
                Vinod chopra
              </span>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ position: "relative" }}>
          <img
            className="d-block w-100"
            src="Images/plain.png"
            alt="First slide"
          />
          <Carousel.Caption
            style={{
              textAlign: "left",
              width: "500px",
              position: "absolute",
              bottom: "10%",
              left: "10%",
            }}
          >
            <h3>Why invest near hyderabad airport</h3>
            <p>Airport: AN Analysis 2023</p>
            <p>
              May 27th, 2023. By{" "}
              <span style={{ color: "yellow", fontWeight: "light" }}>
                Vinod chopra
              </span>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ position: "relative" }}>
          <img
            className="d-block w-100"
            src="Images/plain.png"
            alt="First slide"
          />
          <Carousel.Caption
            style={{
              textAlign: "left",
              width: "500px",
              position: "absolute",
              bottom: "10%",
              left: "10%",
            }}
          >
            <h3>Why invest near hyderabad airport</h3>
            <p>Airport: AN Analysis 2023</p>
            <p>
              May 27th, 2023. By{" "}
              <span style={{ color: "yellow", fontWeight: "light" }}>
                Vinod chopra
              </span>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div style={{ paddingTop: "5px" }}>
        <Grid container spacing={1}>
          <Grid item xs={4} md={2}>
            <img width="100%" src="Images/plain.png" alt="loading" />
          </Grid>
          <Grid item xs={4} md={2}>
            <img width="100%" src="Images/plain.png" alt="loading" />
          </Grid>
          <Grid item xs={4} md={2}>
            <img width="100%" src="Images/plain.png" alt="loading" />
          </Grid>
          <Grid item xs={4} md={2}>
            <img width="100%" src="Images/plain.png" alt="loading" />
          </Grid>
          <Grid item xs={4} md={2}>
            <img width="100%" src="Images/plain.png" alt="loading" />
          </Grid>
          <Grid item xs={4} md={2}>
            <img width="100%" src="Images/plain.png" alt="loading" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Carousel2;
