import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";
import { Input, TextField } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function WorkSection(props) {
  const classes = useStyles();
  return (
    <div className={classes.section} style={{minHeight:`${props.minHeight}`}}>
      <GridContainer justify="center">
        <GridItem style={{color: `${props.colorText}`}} cs={12} sm={12} md={8}>
          <h2 style={{color: `${props.colorText}`}}  className={classes.title}>Entre em contato</h2>
          <h4 style={{color: `${props.colorText}`}}   className={classes.description} >
          Você pode entrar em contato comigo enviando um email ou através dos links abaixo:
          </h4>
          <form>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center", gap:"15px"}}>
              {/* <GridItem xs={12} sm={12} md={6}>; */}
                <TextField
                  label="Seu Nome"
                  id="name"
                  variant="outlined"
                  size="small"
                  color="success"
                  style={{width:"300px"}}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              {/* </GridItem> */}
              {/* <GridItem xs={12} sm={12} md={6}> */}
                <TextField
                  label="Seu Email"
                  variant="outlined"
                  size="small"
                  id="email"
                  style={{width:"300px"}}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              {/* </GridItem> */}
              <TextField
                label="Message"
                id="message"
                size="small"
                variant="outlined"
                style={{width:"300px"}}
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                  multiline="true"
                rows={3}
                inputProps={{
                  // rows: 5
                }}
              />
              {/* <GridItem xs={12} sm={12} md={4} className={classes.textCenter}> */}
                <Button color="info" style={{width:"300px"}}>Enviar</Button>
                <GridContainer style={{gap:"15px"}}>
                  <Button color="success"><i className="fas fa-whatsapp"></i> Falar no Wpp</Button>
                  <Button type="phone" value="81998644373" ><i className="fas fa-phone"></i>Ligar</Button>
                </GridContainer>
              {/* </GridItem> */}
            </div>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
