import React from "react";

const NavBar = () => {
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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ margin: "8px" }}>
        <img src="Images/logo.png" alt="logo" width="181" />
      </div>
      <div>
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
            return <div style={{ padding: "8px" }}>{item}</div>;
          })}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            color: "#015474",
            fontSize: "14px",
            fontWeight: "600",
            padding: "8px 30px",
            border: "2px solid #03b6c3",
            borderRadius: "40px",
            marginRight: "10px",
          }}
        >
          Login
        </div>
        <div
          style={{
            color: "#015474",
            fontSize: "14px",
            fontWeight: "600",
            padding: "8px 30px",

            border: "2px solid #03b6c3",
            borderRadius: "40px",
            backgroundColor: "#7ED7CF",
            marginRight: "10px",
          }}
        >
          Post Property
        </div>
      </div>
    </div>
  );
};

export default NavBar;
