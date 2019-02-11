import React from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import img from "../assets/images/backsplash.jpg";
import Newsletter from "./Newsletter";

const styles = theme => ({
  root: {
    height: 280,
    width: "100%",
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: -74,
    [theme.breakpoints.up("sm")]: {
      height: 350
    },
    [theme.breakpoints.up("md")]: {
      height: 700
    }
  },
  container: {
    paddingTop: 100,
    paddingLeft: 30,
    paddingRight: 15,
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 120,
      paddingTop: 110,
      width: 350
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 200,
      paddingTop: 250,
      width: 465
    }
  },
  text: {
    letterSpacing: 3,
    fontWeight: 600,
    color: theme.status.black,
    textShadow: "2px 2px 4px #ccc"
  },
  title: {
    textTransform: "capitalize",
    fontSize: 35,
    margin: 0,
    [theme.breakpoints.up("sm")]: {
      fontSize: 48
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 122
    }
  },
  title2: {
    marginLeft: 40,
    [theme.breakpoints.up("sm")]: {
      textAlign: "right",
      margin: 0
    }
  },
  small: {
    fontSize: 35,
    [theme.breakpoints.up("sm")]: {
      fontSize: 48
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 96
    }
  },
  subtitle: {
    textTransform: "uppercase",
    fontSize: 14,
    paddingTop: 15,
    [theme.breakpoints.up("sm")]: {
      fontSize: 16,
      paddingTop: 15
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 24
    }
  },
  logo: {
    width: 90,
    paddingBottom: 20,
    textAlign: "center"
  }
});

const Hero = props => {
  const { classes, t } = props;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography
          variant="h2"
          gutterBottom
          className={classnames(classes.text, classes.title)}
        >
          E<span className={classes.small}>ISBACH</span>
        </Typography>
        <Typography
          variant="h2"
          gutterBottom
          className={classnames(classes.text, classes.title, classes.title2)}
        >
          R<span className={classes.small}>IDERS</span>
        </Typography>
        <Typography className={classnames(classes.text, classes.subtitle)}>
          {t("hero.subtitle")}
        </Typography>
        <Newsletter />
      </div>
    </div>
  );
};

Hero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withNamespaces()(withStyles(styles)(Hero));
