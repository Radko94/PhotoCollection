import React, { lazy } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import headerStyles from "./album-header.styles";
const Button = lazy(() => import("@material-ui/core/Button"));

const AlbumHeader = ({ albumId, title }) => {
  const classes = headerStyles();
  return (
    <header className={classes.root}>
      <main className={classes.title}>
        <h1>{title}</h1>
      </main>
      <aside className={classes.buttons}>
        <Link to="/" className={classes.links}>
          <Button variant="outlined" color="primary">
            HOME
          </Button>
        </Link>
        <Link to="/6" className={classes.links}>
          <Button variant="outlined" color="secondary">
            FAVORITES
          </Button>
        </Link>
      </aside>
    </header>
  );
};

AlbumHeader.propTypes = {
  albumId: PropTypes.number,
  title: PropTypes.string,
};

export default AlbumHeader;
