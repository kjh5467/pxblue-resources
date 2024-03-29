import React from "react";
import { Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { ReactComponent as EatonLogo } from "../media/EatonLogo.bb857d1a.svg";

const useStyles = makeStyles(theme => ({
  footer: {
    padding: "2rem",
    textAlign: "center",
    borderTop: "1px solid",
    flex: "0 0 auto",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "365px"
    }
  },
  footerLogo: {
    marginTop: "20px",
    paddingLeft: "44px"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Link>
        <Typography>
          Power Xpert Blue is a part of the Center for Connected Intelligent
          Solutions (CCIS).
        </Typography>
        <br />
        <span>Learn more about our other offerings.</span>
      </Link>
      <div className={classes.footerLogo}>
        <EatonLogo />
      </div>
    </div>
  );
};

export default Footer;
