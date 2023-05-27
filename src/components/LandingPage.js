import React from "react";
import NavBar from "./NavBar";
import Carousel1 from "./Carousel1";
import SearchPage from "./SearchPage";
import RecentSearches from "./RecentSearches";
import SearchByPropCities from "./SearchByPropCities";
import CardImage from "./CardImage";

import AboutUsPage from "./AboutUsPage";
import ExclusiveServices from "./ExclusiveServices";
import PlotsForSaleInHyd from "./PlotsForSaleInHyd";
import RentServices from "./RentServices";
import Carousel2 from "./Carousel2";

import TopBuilders from "./TopBuilders";
import FeaturedProperties from "./FeaturedProerties";
import SearchByPropCities2 from "./SearchByPropCities2";
import FindHostel from "./FindHostel";
import FindFlatmate from "./FindFlatmate";
import EventSpaceInHyd from "./EventsSpaceInHyd";
import TopProjectsInHyd from "./TopProjectsInHyd";
import TrendingInHyd from "./TrendingInHyd";

const LandingPage = () => {
  return (
    <div style={{ fontFamily: "Poppins" }}>
      <NavBar />
      <Carousel1 />
      <br />
      <SearchPage />
      <div style={{ margin: "60px 100px", padding: "0px" }}>
        <h4 style={{ marginBottom: "30px" }}>
          <center>
            <b>Search Properties By Popular Cities</b>
          </center>
        </h4>
        <SearchByPropCities />
        <hr style={{ marginTop: "30px" }} />
        <RecentSearches />
        <hr style={{ marginTop: "30px" }} />
        <SearchByPropCities2 />
        <hr style={{ marginTop: "30px" }} />
        <CardImage />
        <hr style={{ marginTop: "30px" }} />
        <FindHostel />
        <hr style={{ marginTop: "30px" }} />
        <FindFlatmate />
        <hr style={{ marginTop: "30px" }} />
        <EventSpaceInHyd />
        <hr style={{ marginTop: "30px" }} />
        <TopProjectsInHyd />
        <hr style={{ marginTop: "30px" }} />
        <ExclusiveServices />
        <hr style={{ marginTop: "30px" }} />
        <RentServices />
        <hr style={{ marginTop: "30px" }} />
        <TrendingInHyd />
        <hr style={{ marginTop: "30px" }} />
        <FeaturedProperties />
        <hr style={{ marginTop: "30px" }} />
        <TopBuilders />
        <hr style={{ marginTop: "30px" }} />
        <Carousel2 />
        <hr style={{ marginTop: "30px" }} />
        <PlotsForSaleInHyd />
        <hr style={{ marginTop: "30px" }} />
        <img width="100%" src="Images/cityIcon.png" alt="" />
        <hr style={{ marginTop: "30px" }} />
        <AboutUsPage />
      </div>
    </div>
  );
};

export default LandingPage;
