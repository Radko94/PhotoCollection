import { PhotoTypes } from "./photos.types";

const INITIAL_STATE = {
  albums: [],
  photosError: null,
};

const photoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PhotoTypes.GET_FIRST_ALBUM_SUCCESS:
      return {
        ...state,
        albums: Object.assign([], [...state.albums, action.payload]),
        photosError: null,
      };
    case PhotoTypes.GET_FIRST_ALBUM_ERROR:
      return {
        ...state,
        photosError: action.payload,
      };
    case PhotoTypes.GET_SECOND_ALBUM_SUCCESS:
      return {
        ...state,
        albums: Object.assign([], [...state.albums, action.payload]),
        photosError: null,
      };
    case PhotoTypes.GET_SECOND_ALBUM_ERROR:
      return {
        ...state,
        photosError: action.payload,
      };
    case PhotoTypes.GET_THIRD_ALBUM_SUCCESS:
      return {
        ...state,
        albums: Object.assign([], [...state.albums, action.payload]),
        photosError: null,
      };
    case PhotoTypes.GET_THIRD_ALBUM_ERROR:
      return {
        ...state,
        photosError: action.payload,
      };
    case PhotoTypes.GET_FOURTH_ALBUM_SUCCESS:
      return {
        ...state,
        albums: Object.assign([], [...state.albums, action.payload]),
        photosError: null,
      };
    case PhotoTypes.GET_FOURTH_ALBUM_ERROR:
      return {
        ...state,
        photosError: null,
      };
    case PhotoTypes.GET_FIFTH_ALBUM_SUCCCESS:
      return {
        ...state,
        albums: Object.assign([], [...state.albums, action.payload]),
        photosError: null,
      };
    case PhotoTypes.GET_FIFTH_ALBUM_ERROR:
      return {
        ...state,
        photosError: null,
      };
    case PhotoTypes.ADD_REMOVE_FAVORITES_SUCCESS:
      const updatedAlbums = Object.assign([], [...state.albums]);
      const album = updatedAlbums.filter(
        (x) => x.albumId === action.albumId
      )[0];
      album.photoCollection.filter((x) => x.id === action.payload.id)[0] =
        action.payload;

        updatedAlbums.filter(x => (x) => x.albumId === action.albumId)[0] = album
      return {
        ...state,
        albums: Object.assign([], [...updatedAlbums])
      };
    case PhotoTypes.CLEAR_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default photoReducer;
