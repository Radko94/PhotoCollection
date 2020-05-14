import React from "react";
import useStyles from "./loading.styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const CircularIndeterminate = ({ contained, className }) => {
  const classes = useStyles();

  return (
    <div className={className}>
      {contained ? (
        <CircularProgress className={classes.circle} />
      ) : (
        <div className={classes.root}>
          <CircularProgress className={classes.circle} />
        </div>
      )}
    </div>
  );
};

export default CircularIndeterminate;
