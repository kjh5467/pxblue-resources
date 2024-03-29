import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import "./App.css";

//Components
import { Typography, Link } from "@material-ui/core";
import NpmTable from "./components/NpmTable";
import DesignTable from "./components/DesignTable";
import Footer from "./components/Footer";
import SideNavigation from "./components/SideNavigation";

import styles from "./styles/styleClasses";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.App}>
        <SideNavigation position="sticky" />
        <main className={classes.content}>
          <Typography
            variant="h1"
            color="primary"
            className={classes.powerxpertblueresources}
          >
            Power Xpert Blue Resources
          </Typography>
          <Typography variant="body1" className={classes.body}>
            Power Xpert Blue offers a number of resources for developers,
            available through{" "}
            <Link
              href={"https://www.npmjs.com/org/pxblue"}
              target="_blank"
              rel="noopener noreferrer"
            >
              NPM
            </Link>{" "}
            and{" "}
            <Link
              href="https://github.com/pxblue"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Link>
            . These include utility packages as well as sample code/design
            pattern examples.
          </Typography>
          <Typography variant="h2" color="primary" className={classes.h2}>
            NPM Packages
          </Typography>
          <Typography variant="body1" className={classes.body}>
            The following table shows the current status for PX Blue resources
            available through NPM.
          </Typography>
          <NpmTable />
          <div>
            <br />
          </div>
          <Typography variant="h2" color="primary" className={classes.h2}>
            Design Patterns / Examples
          </Typography>
          <Typography variant="body1" className={classes.body}>
            The following table shows the current status of the PX Blue design
            pattern code samples available from GitHub and{" "}
            <Link
              href="https://stackblitz.com/@px-blue"
              target="_blank"
              rel="noopener noreferrer"
            >
              StackBlitz
            </Link>
          </Typography>
          <DesignTable />
        </main>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(App);
