import React, { lazy } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import useStyles from "./album-menu.styles";

import {
  selectAlbums,
  selectPhotosError,
} from "../../redux/photos/photos.selector";

const ButtonBase = lazy(() => import("@material-ui/core/ButtonBase"));
const Typography = lazy(() => import("@material-ui/core/Typography"));

const AlbumsMenu = ({ albums }) => {
  const classes = useStyles();
  return (
    <article>
      {albums.map((album, i) => (
        <Link key={album.albumId} to={`/${i + 1}`} className={classes.root}>
          <ButtonBase
            focusRipple
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: (i + 1) % 3 === 1 ? "100%" : "50%",
            }}
          >
            <span
              className={classes.imageSrc}
              value={i + 1}
              style={{
                backgroundImage: `url(/album${i + 1}.jpg)`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {album.albumTitle}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        </Link>
      ))}
    </article>
  );
};

const mapStateToProps = createStructuredSelector({
  albums: selectAlbums,
  error: selectPhotosError,
});

export default connect(mapStateToProps)(AlbumsMenu);
