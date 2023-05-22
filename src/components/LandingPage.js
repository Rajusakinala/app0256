import React from "react";
import NavBar from "./NavBar";
import Corosals from "./Corosals";
import SearchPage from "./SearchPage";
import RecentSearches from "./RecentSearches";
import SearchByPropCities from "./SearchByPropCities";
import CardImage from "./CardImage";
import CardImage2 from "./CardImage2";
import AboutUsPage from "./AboutUsPage";
import ExclusiveServices from "./ExclusiveServices";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <Corosals />
      <SearchPage />
      <div style={{ margin: "10px 100px", padding: "0px" }}>
        <h4>
          <center>Search Properties By Popular Cities</center>
        </h4>
        <SearchByPropCities />
        <hr />
        <RecentSearches />
        <hr />
        <SearchByPropCities />
        <hr />
        <CardImage />
        <hr />
        <RecentSearches />
        <hr />
        <CardImage2 />
        <hr />
        <ExclusiveServices />
        <hr />
        <img width="100%" src="Images/rentService.png" alt="" />
        <hr />
        <AboutUsPage />
      </div>
    </div>
  );
};

export default LandingPage;
