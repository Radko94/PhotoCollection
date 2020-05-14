import axios from "axios";
import { from } from "rxjs";
import { map, catchError, take } from "rxjs/operators";

import {
  getAlbumsSuccess,
  getAlbumsError,
  addRemoveFavoritesSuccess,
  clearState,
} from "./photos.actions";

const prodUrl = "https://tranquil-meadow-86152.herokuapp.com/photos";
const devUrl = "http://localhost:3100/photos";
const backEndUrl = process.env.NODE_ENV === "production" ? prodUrl : devUrl;

export const getAlbums = () => {
  console.log("getAlbums");
  return (dispatch) => {
    from(
      axios({
        method: "GET",
        url: backEndUrl + "/getAlbums",
      })
    )
      .pipe(
        take(1),
        map((x) => dispatch(getAlbumsSuccess(x.data))),
        catchError((error) => dispatch(getAlbumsError(error)))
      )
      .subscribe();
  };
};

export const addRemoveFavorites = (albumId, photo) => {
  return (dispatch) => dispatch(addRemoveFavoritesSuccess(albumId, photo));
};

export const clearStoreState = () => {
  return (dispatch) => dispatch(clearState());
};
