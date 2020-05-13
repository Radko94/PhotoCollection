import { PhotoTypes } from "./photos.types";

export const getFirstAlbumSucces = (album) => ({
  type: PhotoTypes.GET_FIRST_ALBUM_SUCCESS,
  payload: album,
});

export const getFirstAlbumError = (error) => ({
  type: PhotoTypes.GET_FIRST_ALBUM_ERROR,
  payload: error,
});

export const getSecondAlbumSuccess = (album) => ({
  type: PhotoTypes.GET_SECOND_ALBUM_SUCCESS,
  payload: album,
});

export const getSecondAlbumError = (error) => ({
  type: PhotoTypes.GET_SECOND_ALBUM_ERROR,
  payload: error,
});

export const getThirdAlbumSuccess = (album) => ({
  type: PhotoTypes.GET_THIRD_ALBUM_SUCCESS,
  payload: album,
});

export const getThirdAlbumError = (error) => ({
  type: PhotoTypes.GET_THIRD_ALBUM_ERROR,
  payload: error,
});

export const getFourthAlbumSuccess = (album) => ({
  type: PhotoTypes.GET_FOURTH_ALBUM_SUCCESS,
  payload: album,
});

export const getFourthAlbumError = (error) => ({
  type: PhotoTypes.GET_FOURTH_ALBUM_ERROR,
  payload: error,
});

export const getFifthAlbumSuccess = (album) => ({
  type: PhotoTypes.GET_FIFTH_ALBUM_SUCCCESS,
  payload: album,
});

export const getFifthAlbumError = (error) => ({
  type: PhotoTypes.GET_FIFTH_ALBUM_ERROR,
  payload: error,
});

export const addRemoveFavoritesSuccess = (albumId, photo) => ({
  type: PhotoTypes.ADD_REMOVE_FAVORITES_SUCCESS,
  albumId,
  payload: photo
});

export const clearState = () => ({
  type: PhotoTypes.CLEAR_STATE,
});
