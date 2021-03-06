import React, { lazy } from "react";
import { useParams } from "react-router-dom";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";

import AlbumHeader from "../album-header/album-header.component";

import {
  selectAlbums,
  selectPhotosError,
} from "../../redux/photos/photos.selector";

import { addRemoveFavoritesSuccess } from "../../redux/photos/photos.actions";

import albumStyles from "./album.styles";

const GridList = lazy(() => import("@material-ui/core/GridList"));
const GridListTile = lazy(() => import("@material-ui/core/GridListTile"));
const GridListTileBar = lazy(() => import("@material-ui/core/GridListTileBar"));
const IconButton = lazy(() => import("@material-ui/core/IconButton"));

const FavoriteBorderIcon = lazy(() =>
  import("@material-ui/icons/FavoriteBorder")
);

const FavoriteIcon = lazy(() => import("@material-ui/icons/Favorite"));

const Album = ({ albums, favorites }) => {
  const classes = albumStyles();
  let { id } = useParams();

  const album = { ...albums.filter((x) => x.albumId === +id)[0] };

  const { albumId, albumTitle, photoCollection } = album;

  const addRemoveFavorites = (albumId, photo) => {
    if (photo.favorite) photo.favorite = false;
    else photo.favorite = true;

    favorites(albumId, photo);
  };

  return (
    <article className={classes.root}>
      <AlbumHeader albumId={albumId} title={albumTitle} />
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {photoCollection && photoCollection.length > 0 ? (
          photoCollection.map((tile, i) => (
            <GridListTile
              key={tile.id}
              cols={(i + 1) % 3 === 1 ? 2 : 1}
              rows={2}
            >
              <img src={tile.url} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                titlePosition="top"
                actionIcon={
                  <IconButton
                    aria-label={`star ${tile.title}`}
                    className={classes.icon}
                    onClick={() => addRemoveFavorites(albumId, tile)}
                  >
                    {tile.favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </IconButton>
                }
                actionPosition="left"
                className={classes.titleBar}
              />
            </GridListTile>
          ))
        ) : (
          <h1 className={classes.noElements}>
            No elements at this time. Check again later.
          </h1>
        )}
      </GridList>
    </article>
  );
};

Album.propTypes = {
  albums: PropTypes.array,
  favorites: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  albums: selectAlbums,
  error: selectPhotosError,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      favorites: addRemoveFavoritesSuccess,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Album);
