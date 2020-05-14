import { PhotoTypes } from "./photos.types";

export const getAlbumsSuccess = (albums) => ({
  type: PhotoTypes.GET_ALBUMS_SUCCESS,
  payload: albums,
});

export const getAlbumsError = (error) => ({
  type: PhotoTypes.GET_ALBUMS_ERROR,
  payload: error,
});

export const addRemoveFavoritesSuccess = (albumId, photo) => ({
  type: PhotoTypes.ADD_REMOVE_FAVORITES_SUCCESS,
  albumId,
  payload: photo,
});

export const clearState = () => ({
  type: PhotoTypes.CLEAR_STATE,
});
