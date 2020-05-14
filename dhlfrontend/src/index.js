import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/sore";
import LoadingComponent from "./components/loading-component/loading.component";

import './index.css'

const App = lazy(() => import("./App"));

ReactDOM.render(
  <Suspense fallback={<LoadingComponent />}>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
