import { PhotoTypes } from "./photos.types";

const INITIAL_STATE = {
  firstAlbum: null,
  secondAlbum: null,
  thirdAlbum: null,
  fourthAlbum: null,
  fifthAlbum: null,
  albums: [],
  photosError: null,
};

const photoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PhotoTypes.GET_FIRST_ALBUM_SUCCESS:
      return {
        ...state,
        firstAlbum: action.payload,
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
        secondAlbum: action.payload,
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
        thirdAlbum: action.payload,
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
        fourthAlbum: action.payload,
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
        fifthAlbum: action.payload,
        albums: Object.assign([], [...state.albums, action.payload]),
        photosError: null,
      };
    case PhotoTypes.GET_FIFTH_ALBUM_ERROR:
      return {
        ...state,
        photosError: null,
      };
    default:
      return state;
  }
};

export default photoReducer;
