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

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        title="Diego Ciara: Início"
        brand="Diego Ciara"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter responsive image="/img/landing-bg.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              
              <img
                src="https://media.licdn.com/dms/image/D4D03AQG5NznYSFUknw/profile-displayphoto-shrink_200_200/0/1692024640280?e=1697673600&v=beta&t=yCnomghWHEbSYqvvQ13RaYe_JuiIj11SHxnJ3W_I0FM"
                alt="..."
                style={{height:"100px", width:"100px", borderRadius:"20px"}}
              />
              <div/>
              <h1 className={classes.title}>Diego Ciara</h1><br/>
              <h3 >Front-end developer</h3><br/>
              <p>
              Olá! Me chamo Diego, tenho 22 anos, sou programador front-end e acadêmico em Engenharia de Software com o maior amor e orgulho!<br/>
              Sinta-se a vontade para se conectar comigo ou trocar uma ideia!
              </p>
              {/* <p>
              Olá! Me chamo Diego, tenho 22 anos e sou desenvolvedor front-end com o maior amor e orgulho! Imerso completamente no mundo da tecnologia, gosto de trabalhar em
              projetos desafiadores em que me envolva por completo. <br/>Iniciei meus estudos na programação
              através de cursos na internet e documentações das tecnologias que utilizo. 
              Hoje sou acadêmico em Engenharia de Software na Estácio, onde espero me tornar um excelente Software Engineer.<br/>
              Sinta-se a vontade para se conectar comigo ou trocar uma ideia!
              </p> */}
              <br />
              
              <Button
                color="info"
                size="lg"
                style={{marginRight:"20px"}}
                href="/contact"                
                rel="noopener noreferrer"
              >
                <i className="fas fa-whatsapp" />
                Entre em contato
              </Button>
              <Button
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                rel="noopener noreferrer"
              >
                <i className="fas fa-whatsapp" />
                Ver projetos
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {/* <ProductSection />
          <TeamSection /> */}
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
