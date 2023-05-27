// import React from "react";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// const SearchByPropCities = () => {
//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "start",
//           position: "relative",
//         }}
//       >
//         <div style={{ position: "relative", top: "140px" }}>
//           <ChevronLeftIcon style={{ fill: "" }} />
//         </div>
//         {/* <img
//           src="Images/chevron.png"
//           alt=""
//           style={{ position: "absolute", top: "50px", left: "50px" }}
//         /> */}

//         <div style={{ margin: "5px", position: "relative" }}>
//           <div
//             style={{
//               color: "white",
//               position: "absolute",
//               top: "20px",
//               left: "10px",
//             }}
//           >
//             <h5>Hyderabad</h5>
//             <span style={{ fontSize: "8px" }}>1028 properties</span>
//           </div>
//           <img width="300px" src="Images/charminar.png" alt="" />
//         </div>
//         <div style={{ margin: "5px", position: "relative" }}>
//           <div
//             style={{
//               color: "white",
//               position: "absolute",
//               top: "20px",
//               left: "10px",
//             }}
//           >
//             <h5>Hyderabad</h5>
//             <span style={{ fontSize: "8px" }}>1028 properties</span>
//           </div>
//           <img width="300px" src="Images/charminar.png" alt="" />
//         </div>
//         <div style={{ margin: "5px", position: "relative" }}>
//           <div
//             style={{
//               color: "white",
//               position: "absolute",
//               top: "20px",
//               left: "10px",
//             }}
//           >
//             <h5>Hyderabad</h5>
//             <span style={{ fontSize: "8px" }}>1028 properties</span>
//           </div>
//           <img width="300px" src="Images/charminar.png" alt="" />
//         </div>

//         <div style={{ margin: "5px", position: "relative" }}>
//           <div
//             style={{
//               color: "white",
//               position: "absolute",
//               top: "20px",
//               left: "10px",
//             }}
//           >
//             <h5>Hyderabad</h5>
//             <span style={{ fontSize: "8px" }}>1028 properties</span>
//           </div>
//           <img width="300px" src="Images/charminar.png" alt="" />
//         </div>
//         <div style={{ position: "relative", top: "140px" }}>
//           <ChevronRightIcon style={{ fill: "" }} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchByPropCities;

import { Grid, IconButton } from "@mui/material";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const SearchByPropCities = () => {
  return (
    <div
      style={{
        // padding: "10px",
        marginTop: "20px",
        position: "relative",
        // backgroundColor: "lightgray",
        zIndex: 9999,
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
          <IconButton style={{ transform: "scale(3)" }}>
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
          opacity: 1,
        }}
      >
        <div>
          <IconButton style={{ transform: "scale(3)" }}>
            <ChevronRightIcon style={{ fill: "white" }} />
          </IconButton>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3} sx={{ position: "relative" }}>
          <img width="100%" src="Images/charminar.png" alt="" />
          <div
            style={{
              color: "white",
              position: "absolute",
              top: "10%",
              left: "10%",
            }}
          >
            <h4>Hyderabad</h4>
            <h6 style={{ fontSize: "12px", fontWeight: "lighter" }}>
              1028 Properties
            </h6>
          </div>
        </Grid>
        <Grid item xs={6} md={3} sx={{ position: "relative" }}>
          <img width="100%" src="Images/charminar.png" alt="" />
          <div
            style={{
              color: "white",
              position: "absolute",
              top: "10%",
              left: "10%",
            }}
          >
            <h4>Hyderabad</h4>
            <h6>1028 Properties</h6>
          </div>
        </Grid>
        <Grid item xs={6} md={3} sx={{ position: "relative" }}>
          <img width="100%" src="Images/charminar.png" alt="" />
          <div
            style={{
              color: "white",
              position: "absolute",
              top: "10%",
              left: "10%",
            }}
          >
            <h4>Hyderabad</h4>
            <h6>1028 Properties</h6>
          </div>
        </Grid>
        <Grid item xs={6} md={3} sx={{ position: "relative" }}>
          <img width="100%" src="Images/charminar.png" alt="" />
          <div
            style={{
              color: "white",
              position: "absolute",
              top: "10%",
              left: "10%",
            }}
          >
            <h4>Hyderabad</h4>
            <h6>1028 Properties</h6>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchByPropCities;
