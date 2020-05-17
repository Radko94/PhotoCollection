import { PhotoTypes } from "./photos.types";

const INITIAL_STATE = {
  albums: [],
  photosError: null,
};

const photoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PhotoTypes.GET_ALBUMS_SUCCESS:
      return {
        ...state,
        albums: action.payload,
      };
    case PhotoTypes.GET_ALBUMS_ERROR:
      console.log(action.payload);
      return {
        ...state,
        photosError: action.payload,
      };
    case PhotoTypes.ADD_REMOVE_FAVORITES_SUCCESS:
      const updatedAlbums = Object.assign([], [...state.albums]);

      const album = updatedAlbums.filter(
        (x) => x.albumId === action.albumId
      )[0];

      album.photoCollection.filter((x) => x.id === action.payload.id)[0] =
        action.payload;

      updatedAlbums.filter((x) => x.albumId === action.albumId)[0] = album;
      const favoriteAlbum = updatedAlbums.filter((x) => x.albumId === 6)[0];

      action.payload.favorite
        ? favoriteAlbum.photoCollection.push(action.payload)
        : (favoriteAlbum.photoCollection = updatedAlbums
            .filter((x) => x.albumId === 6)[0]
            .photoCollection.filter((x) => x.id !== action.payload.id));
      return {
        ...state,
        albums: Object.assign([], [...updatedAlbums]),
      };
    case PhotoTypes.CLEAR_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default photoReducer;
