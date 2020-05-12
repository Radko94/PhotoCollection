import photoReducer from "./photos/photos.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  photos: photoReducer,
});

export default rootReducer;
