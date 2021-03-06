import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";

const useStyles = makeStyles(theme => ({
  snackbar: {
    left: 0,
    right: 0,
    transform: "none"
  },
  snackbarContent: {
    borderRadius: 0,
    width: "100%",
    minWidth: "0",
    maxWidth: "none",
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: theme.palette.common.black,
    [theme.breakpoints.up("md")]: {
      paddingLeft: 60,
      paddingRight: 60
    }
  },
  message: {
    flexBasis: "100%",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "60%"
    },
    [theme.breakpoints.up("lg")]: {
      flexBasis: "80%"
    }
  },
  action: {
    marginLeft: "none",
    marginRight: "none",
    paddingLeft: 0
  },
  button: {
    marginLeft: 35,
    paddingLeft: 50,
    paddingRight: 50
  },
  buttonDecline: {
    color: theme.palette.common.white
  },
  link: {
    color: theme.palette.common.white,
    paddingLeft: 8,
    textTransform: "capitalize",
    textDecoration: "underline",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 0
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 8
    }
  }
}));

function Tracking({
  handleClose,
  handleAccept,
  handleDecline,
  handlePageChange,
  isSnackbarOpen
}) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}
      open={isSnackbarOpen}
      onClose={handleClose}
      className={classes.snackbar}
    >
      <SnackbarContent
        className={classes.snackbarContent}
        classes={{ message: classes.message, action: classes.action }}
        aria-describedby="client-snackbar"
        onClose={handleClose}
        message={
          <span id="client-snackbar">
            {t("tracking.message")}
            <Button
              className={classes.link}
              onClick={() => handlePageChange("/privacy")}
            >
              {t("tracking.privacyLink")}
            </Button>
          </span>
        }
        action={[
          <Fragment key="button">
            <Button
              className={classes.buttonDecline} //eslint-disable-next-line
              href="javascript:gaOptout();"
              onClick={handleDecline}
            >
              {t("tracking.decline")}
            </Button>
            <Button
              color="secondary"
              variant="contained"
              className={classes.button}
              onClick={handleAccept}
            >
              {t("tracking.accept")}
            </Button>
          </Fragment>
        ]}
      />
    </Snackbar>
  );
}

Tracking.propTypes = {
  handleAccept: PropTypes.func,
  handleDecline: PropTypes.func,
  handleClose: PropTypes.func,
  handlePageChange: PropTypes.func,
  isSnackbarOpen: PropTypes.bool
};

export default Tracking;
