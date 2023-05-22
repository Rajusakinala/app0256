import React from "react";

const CardImage = () => {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex" }}>
      <div style={{ width: "50%", padding: "120px" }}>
        <div style={{ paddingBottom: "30px" }}>
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
      <img width="50%" src="Images/girls3.png" alt="" />
    </div>
  );
};

export default CardImage;
