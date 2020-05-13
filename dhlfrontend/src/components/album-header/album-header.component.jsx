import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

import headerStyles from "./album-header.styles";

const AlbumHeader = ({ title }) => {
  const classes = headerStyles();
  console.log(title);
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h1>{title}</h1>
      </div>
      <div className={classes.buttons}>
        <Link to="/" className={classes.links}>
          <Button color="primary">HOME</Button>
        </Link>
        <Link to="/favorites" className={classes.links}>
          <Button color="secondary">FAVORITES</Button>
        </Link>
      </div>
    </div>
  );
};

export default AlbumHeader;
