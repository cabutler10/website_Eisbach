import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/styles";
import classnames from "classnames";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
// import ProductDialog from "./ProductDialog";
// import { featureProduct } from "../data/ProductData";
import Button from "@material-ui/core/Button";
import { SurfIcon, FeatherIcon } from "../assets/icons/icons";
import featuredProduct from "../assets/images/featuredProduct.png";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    background: theme.status.greyBlue,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      paddingLeft: 60,
      paddingRight: 60
    },
    [theme.breakpoints.up("md")]: {
      flexWrap: "nowrap",
      paddingTop: 30,
      paddingBottom: 30,
      paddingLeft: 170,
      paddingRight: 170
    }
  },
  button: {
    color: theme.palette.common.black,
    [theme.breakpoints.up("sm")]: {
      marginTop: 30
    }
  },
  containerDetails: {
    display: "flex",
    flexDirection: "column",
    textAlign: "right",
    marginRight: 30,
    flexBasis: "30%"
  },
  containerInfo: {
    flexBasis: "100%",
    [theme.breakpoints.up("md")]: {
      marginLeft: 30,
      flexBasis: "30%"
    }
  },
  containerImg: {
    flexBasis: "100%",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "35%"
    }
  },
  detailTitle: {
    textTransform: "uppercase",
    fontWeight: 700,
    letterSpacing: 3,
    paddingBottom: 5,
    fontSize: 16
  },
  detailTitle2: {
    textTransform: "uppercase",
    fontWeight: 700,
    letterSpacing: 3,
    paddingBottom: 5,
    //paddingTop: 35, temp remove until we have main title back in
    fontSize: 16,
    color: theme.palette.secondary.main
  },
  detailText: {
    textTransform: "capitalize",
    color: theme.status.greyDk,
    letterSpacing: 3,
    fontSize: 12,
    paddingBottom: 5
  },
  containerIcon: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingBottom: 25
  },
  containerIcon2: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 5
  },
  icon: {
    paddingLeft: 25
  },
  off: {
    color: theme.status.grey
  },
  img: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginTop: 100
    }
  },
  barOn: {
    width: 25,
    height: 5,
    background: theme.status.black,
    marginLeft: 5
  },
  barOff: {
    width: 25,
    height: 5,
    background: theme.status.grey,
    marginLeft: 5
  },
  padding: {
    marginTop: 30
  }
}));

function Feature() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root} id="products">
      <Hidden xsDown>
        <div className={classes.containerDetails}>
          <Typography className={classes.detailTitle}>
            {t("feature.surfConditions")}
          </Typography>
          <div className={classes.containerIcon2}>
            <Typography className={classes.detailText}>
              {t("feature.surfDetail2")}
            </Typography>
            <FeatherIcon className={classes.icon} />
            <FeatherIcon className={classes.icon} />
            <FeatherIcon className={classnames(classes.off, classes.icon)} />
          </div>
          <div className={classes.containerIcon2} style={{ paddingTop: 5 }}>
            <Typography className={classes.detailText}>
              {t("feature.surfDetail1")}
            </Typography>
            <SurfIcon className={classes.icon} />
            <SurfIcon className={classes.icon} />
            <SurfIcon className={classes.icon} />
          </div>
          <Typography
            className={classnames(classes.detailTitle, classes.padding)}
          >
            {t("feature.experience")}
          </Typography>
          <div className={classes.containerIcon2}>
            <Typography className={classes.detailText}>
              {t("feature.beginner")}
            </Typography>
            <div className={classes.barOff} />
            <div className={classes.barOff} />
            <div className={classes.barOff} />
            <div className={classes.barOff} />
          </div>
          <div className={classes.containerIcon2}>
            <Typography className={classes.detailText}>
              {t("feature.intermediate")}
            </Typography>
            <div className={classes.barOn} />
            <div className={classes.barOn} />
            <div className={classes.barOn} />
            <div className={classes.barOff} />
          </div>
          <div className={classes.containerIcon2}>
            <Typography className={classes.detailText}>
              {t("feature.pro")}
            </Typography>
            <div className={classes.barOn} />
            <div className={classes.barOn} />
            <div className={classes.barOn} />
            <div className={classes.barOn} />
          </div>
        </div>
      </Hidden>
      <div className={classes.containerImg}>
        <img
          src={featuredProduct}
          alt={t("feature.featureProduct")}
          className={classes.img}
        />
      </div>
      <div className={classes.containerInfo}>
        <Typography className={classes.detailTitle2}>Honeycomb Fin</Typography>
        {/* <Typography className={classes.detailTitle2}>
            {t("feature.highlight")}
          </Typography> */}
        <Typography className={classes.detailText}>
          {t("feature.text")}
        </Typography>
        <Button
          color="secondary"
          variant="outlined"
          className={classnames(classes.button)}
          href="https://amzn.to/2TUCq8D"
          target="_blank"
          rel="noopener"
        >
          {t("newProduct.more")}
        </Button>
        {/* <ProductDialog
            product={featureProduct[0]}
            buttonText={t("newProduct.more")}
            handleDialogOpen={this.handleDialogOpen}
            handleDialogClose={this.handleDialogClose}
            isDialogOpen={isDialogOpen}
          /> */}
      </div>
    </div>
  );
}

export default Feature;
