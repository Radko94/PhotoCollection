import photoReducer from "./photos/photos.reducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["photos"],
  timeout: null,
};

const rootReducer = combineReducers({
  photos: photoReducer,
});

export default persistReducer(persistConfig, rootReducer);
