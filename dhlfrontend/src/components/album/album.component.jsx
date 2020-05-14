import React from "react";
import { useParams } from "react-router-dom";

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

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Album = (props) => {
  const classes = albumStyles();
  let { id } = useParams();

  const { albums } = props;
  const album = { ...albums.filter((x) => x.albumId === +id)[0] };

  const { albumId, albumTitle, photoCollection } = album;

  const addRemoveFavorites = (albumId, photo) => {
    if (photo.favorite) photo.favorite = false;
    else photo.favorite = true;

    const { favorites } = props;

    favorites(albumId, photo);
  };

  return (
    <div className={classes.root}>
      <AlbumHeader albumId={albumId} title={albumTitle} />
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {photoCollection.map((tile, i) => (
          <GridListTile key={tile.id} cols={(i + 1) % 3 === 1 ? 2 : 1} rows={2}>
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
        ))}
      </GridList>
    </div>
  );
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
