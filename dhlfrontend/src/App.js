import React, { Component, lazy } from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";

import "./App.css";

import { getAlbums, clearStoreState } from "./redux/photos/photos.effects";

import {
  selectAlbums,
  selectPhotosError,
} from "./redux/photos/photos.selector";


const Home = lazy(() => import("./pages/home/home.component"));
const Album = lazy(() => import("./components/album/album.component"));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentWillMount() {
    const { getAlbums, albums } = this.props;
    if (!albums.length) {
      getAlbums();
    }
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/albums-menu" component={Home} />
          <Route path="/:id" component={Album} />
          <Redirect path="*" to="/albums-menu" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  albums: selectAlbums,
  error: selectPhotosError,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getAlbums: getAlbums,
      clear: clearStoreState,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
