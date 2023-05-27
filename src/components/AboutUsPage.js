import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import { Grid } from "@mui/material";
const AboutUsPage = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      spacing={2}
    >
      <Grid item xs={12} md={4} style={{}}>
        <img width="150px" src="Images/logo.png" alt="" />
        <h3>About Us</h3>
        <p>
          Magicbricks is a full stack service provider for all real estate
          needs, with 15+ services including home loans, pay rent, packers and
          movers, legal assistance, property valuation, and expert advice. As
          the largest platform for buyers and sellers of property to connect in
          a transparent manner, Magicbricks has an active base of over 15 lakh
          property listings.
        </p>
        <h3>Download our App</h3>
        <img width="150px" src="Images/getInGooglePlay.png" alt="" />
      </Grid>
      <Grid item xs={12} md={4}>
        <h3>Quick links</h3>
        <p>
          Buy, Rent, Advance Booking, Pay Rent, Carparking Spaces, Apartments,
          Villas, Commercial Spaces for rent, Lease, Book play ground for Rent,
          Newly Constructed, Under Construction Ready to Occupy, Book Function
          Hall, Book Eventspace, Sharing properties, Roommate/FlatMate
        </p>
      </Grid>
      <Grid item xs={12} md={4}>
        <h3>Contact Us</h3>
        <p>
          <HomeIcon /> 3755 Commercial St SE Salem, Corner with Sunny Boulevard,
          3755 Commercial OR 97302
        </p>
        <p>
          <PhoneIcon /> (305) 555-4446
        </p>
        <p>
          <MailOutlineIcon /> email@yourdomin.com
        </p>
        <p>
          <DesktopWindowsOutlinedIcon /> WP Rentals
        </p>
        <h3>Social Links</h3>
        <div>
          <FacebookOutlinedIcon />
          <WhatsAppIcon />
          <RssFeedIcon />
          <TwitterIcon />
          <LinkedInIcon />
          <YouTubeIcon />
          <InstagramIcon />
        </div>
      </Grid>
    </Grid>
  );
};

export default AboutUsPage;
