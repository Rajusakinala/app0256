import React from "react";

const SearchPage = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "48px",
          margin: "2px 0px",
          padding: "12px auto",
          paddingLeft: "25%",
          backgroundColor: "#7ED7CF",
        }}
      >
        <input
          placeholder="Location"
          style={{
            border: "none",
            borderRadius: "15px",
            padding: "7px",
            marginRight: "5px",
          }}
        />
        <input
          placeholder="Apartment / Villa"
          style={{
            border: "none",
            borderRadius: "15px",
            padding: "7px",
            marginRight: "5px",
          }}
        />
        <input
          placeholder="Budget"
          style={{
            border: "none",
            borderRadius: "15px",
            padding: "7px",
            marginRight: "5px",
          }}
        />

        <button
          style={{
            color: "Black",
            fontWeight: "600",
            border: "none",
            // backgroundColor: "#7ED7fF",
            background: "linear-gradient(to Right, #76d9a8, #85d6f0)",
            // backgroundColor: `linear-gradient(to right, #FF5733, #1951E5);`,
            borderRadius: "15px",
            padding: "10px 20px",
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchPage;
