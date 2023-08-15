import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "/pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "/pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "/pages-sections/LandingPage-Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function ContactPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div style={{height:"100%", display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center"}}>
      <Header
        // color="transparent"
        routes={dashboardRoutes}
        brand="Diego Ciara"
        rightLinks={<HeaderLinks />}
        fixed
        title="Entre em contato"
        changeColorOnScroll={{
          height: 400,
          color: "black"
        }}
        {...rest}
      />          
      <div className={classNames(classes.main, classes.mainRaised, classes.topFirst)} >
        {/* <div className={classes.container}> */}
          <WorkSection minHeight="80vh"  colorText="#3d3d3d"/>

          {/* <ProductSection />
          <TeamSection /> */}
        {/* </div> */}
      </div>
      <Footer />
    </div>
  );
}
