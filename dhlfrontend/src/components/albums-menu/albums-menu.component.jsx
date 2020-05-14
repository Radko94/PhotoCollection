import React from "react";
import { Link } from "react-router-dom";

import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

import useStyles from "./album-menu.styles";

const AlbumsMenu = ({ albums }) => {
  const classes = useStyles();
  return (
    <div>
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
    </div>
  );
};

export default AlbumsMenu;
