import axios from "axios";
import { from } from "rxjs";
import { map, catchError, take } from "rxjs/operators";

import {
  getFirstAlbumSucces,
  getFirstAlbumError,
  getSecondAlbumSuccess,
  getSecondAlbumError,
  getThirdAlbumSuccess,
  getThirdAlbumError,
  getFourthAlbumSuccess,
  getFourthAlbumError,
  getFifthAlbumSuccess,
  getFifthAlbumError,
  addRemoveFavoritesSuccess,
  clearState,
} from "./photos.actions";

const devUrl = "http://localhost:3100/photos";

export const getFirstAlbum = () => {
  console.log("getFirstAlbum");
  return (dispatch) => {
    from(
      axios({
        method: "GET",
        url: devUrl + "/getFirstAlbum",
      })
    )
      .pipe(
        take(1),
        map((x) => dispatch(getFirstAlbumSucces(x.data))),
        catchError((error) => dispatch(getFirstAlbumError(error)))
      )
      .subscribe();
  };
};

export const getSecondAlbum = () => {
  return (dispatch) => {
    from(
      axios({
        method: "GET",
        url: devUrl + "/getSecondAlbum",
      })
    )
      .pipe(
        take(1),
        map((x) => dispatch(getSecondAlbumSuccess(x.data))),
        catchError((error) => dispatch(getSecondAlbumError(error)))
      )
      .subscribe();
  };
};
export const getThirdAlbum = () => {
  return (dispatch) => {
    from(
      axios({
        method: "GET",
        url: devUrl + "/getThirdlbum",
      })
    )
      .pipe(
        take(1),
        map((x) => dispatch(getThirdAlbumSuccess(x.data))),
        catchError((error) => dispatch(getThirdAlbumError(error)))
      )
      .subscribe();
  };
};
export const getFourthAlbum = () => {
  return (dispatch) => {
    from(
      axios({
        method: "GET",
        url: devUrl + "/getFourthAlbum",
      })
    )
      .pipe(
        take(1),
        map((x) => dispatch(getFourthAlbumSuccess(x.data))),
        catchError((error) => dispatch(getFourthAlbumError(error)))
      )
      .subscribe();
  };
};
export const getFifthAlbum = () => {
  return (dispatch) => {
    from(
      axios({
        method: "GET",
        url: devUrl + "/getFifthAlbum",
      })
    )
      .pipe(
        take(1),
        map((x) => dispatch(getFifthAlbumSuccess(x.data))),
        catchError((error) => dispatch(getFifthAlbumError(error)))
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
