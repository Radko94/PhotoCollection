import React from "react";
import useStyles from "./loading.styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import PropTypes from "prop-types";

const CircularIndeterminate = ({ contained, className }) => {
  const classes = useStyles();

  return (
    <main className={className}>
      {contained ? (
        <CircularProgress className={classes.circle} />
      ) : (
        <div className={classes.root}>
          <CircularProgress className={classes.circle} />
        </div>
      )}
    </main>
  );
};

CircularIndeterminate.propTypes = {
  contained: PropTypes.bool,
  className: PropTypes.string,
};

export default CircularIndeterminate;
