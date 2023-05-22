import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
const SearchByPropCities = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          position: "relative",
        }}
      >
        <div style={{ position: "relative", top: "140px" }}>
          <ChevronLeftIcon style={{ fill: "" }} />
        </div>
        {/* <img
          src="Images/chevron.png"
          alt=""
          style={{ position: "absolute", top: "50px", left: "50px" }}
        /> */}

        <div style={{ margin: "5px", position: "relative" }}>
          <div
            style={{
              color: "white",
              position: "absolute",
              top: "20px",
              left: "10px",
            }}
          >
            <h5>Hyderabad</h5>
            <span style={{ fontSize: "8px" }}>1028 properties</span>
          </div>
          <img width="300px" src="Images/charminar.png" alt="" />
        </div>
        <div style={{ margin: "5px", position: "relative" }}>
          <div
            style={{
              color: "white",
              position: "absolute",
              top: "20px",
              left: "10px",
            }}
          >
            <h5>Hyderabad</h5>
            <span style={{ fontSize: "8px" }}>1028 properties</span>
          </div>
          <img width="300px" src="Images/charminar.png" alt="" />
        </div>
        <div style={{ margin: "5px", position: "relative" }}>
          <div
            style={{
              color: "white",
              position: "absolute",
              top: "20px",
              left: "10px",
            }}
          >
            <h5>Hyderabad</h5>
            <span style={{ fontSize: "8px" }}>1028 properties</span>
          </div>
          <img width="300px" src="Images/charminar.png" alt="" />
        </div>

        <div style={{ margin: "5px", position: "relative" }}>
          <div
            style={{
              color: "white",
              position: "absolute",
              top: "20px",
              left: "10px",
            }}
          >
            <h5>Hyderabad</h5>
            <span style={{ fontSize: "8px" }}>1028 properties</span>
          </div>
          <img width="300px" src="Images/charminar.png" alt="" />
        </div>
        <div style={{ position: "relative", top: "140px" }}>
          <ChevronRightIcon style={{ fill: "" }} />
        </div>
      </div>
    </div>
  );
};

export default SearchByPropCities;
