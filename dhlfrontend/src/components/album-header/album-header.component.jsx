import React, { lazy } from "react";
import { Link } from "react-router-dom";

// import Button from "@material-ui/core/Button";

import headerStyles from "./album-header.styles";
const Button = lazy(() => import("@material-ui/core/Button"));

const AlbumHeader = ({ albumId, title }) => {
  const classes = headerStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h1>{title}</h1>
      </div>
      <div className={classes.buttons}>
        <Link to="/" className={classes.links}>
          <Button variant="outlined" color="primary">HOME</Button>
        </Link>
        <Link to="/6" className={classes.links}>
          <Button variant="outlined" color="secondary">FAVORITES</Button>
        </Link>
      </div>
    </div>
  );
};

export default AlbumHeader;
