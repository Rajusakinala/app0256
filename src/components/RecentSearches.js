import { Button } from "@mui/material";
import React from "react";

const RecentSearches = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h4>Recent Searches</h4>
        </div>
        <div>
          <Button>View all...</Button>
        </div>
      </div>
      <div>
        <div>
          <img width="33.3%" src="Images/recentSearchPhoto.png" alt="loading" />
          <img width="33.3%" src="Images/recentSearchPhoto.png" alt="loading" />
          <img width="33.3%" src="Images/recentSearchPhoto.png" alt="loading" />
        </div>
      </div>
    </div>
  );
};

export default RecentSearches;
