import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

import rootReducer from "./rootReducer";

const midlewares = [thunk];

if (process.env.NODE_ENV === "development") midlewares.push(logger);

export const store = createStore(rootReducer, applyMiddleware(...midlewares));
export const persistor = persistStore(store);

export default { store, persistor };
