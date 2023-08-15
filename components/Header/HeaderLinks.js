/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "/components/CustomDropdown/CustomDropdown.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Projetos"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/projects">
              <a className={classes.dropdownLink}>Todos os projetos</a>
            </Link>,
            <Link href="/sites">
              <a className={classes.dropdownLink}>Sites</a>
            </Link>,
            <Link href="/projects">
              <a className={classes.dropdownLink}>Landing Pages</a>
            </Link>,
            <Link href="/projects">
              <a className={classes.dropdownLink}>SaaS (Software as a Service)</a>
            </Link>,
            <Link href="/projects">
              <a className={classes.dropdownLink}>Ferramentas</a>
            </Link>,
            // <Link href="/projects">
            //   <a className={classes.dropdownLink}>IA <span style={{margin:"8px", fontSize:"10px", color:"#0048fc", fontWeight:700}}>Em breve</span></a>
            // </Link>,
          //   <a
          //   href="/Sites"
          //   target="_blank"
          //   className={classes.dropdownLink}
          // >
          //   Sites
          // </a>
          ]}
        />
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=njsmk-navbar"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Icon className={classes.icons}>unarchive</Icon> Upgrade to PRO
        </Button>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Button
          href="/contact"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <i className="fab fa-mailer" style={{marginRight:"7px"}} /> Entre em contato
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Veja meu Github"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://github.com/DiegoCiara"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github"} />
          </Button>
        </Tooltip>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Conecte-se comigo no Linkedin"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.linkedin.com/in/diego-antonio-055602249/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-linkedin"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Me siga no instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/sr.ciara"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
