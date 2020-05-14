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

const AlbumMenu = lazy(() =>
  import("./components/albums-menu/albums-menu.component")
);
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
      <main className="app">
        <Switch>
          <Route path="/albums-menu" component={AlbumMenu} />
          <Route path="/:id" component={Album} />
          <Redirect path="*" to="/albums-menu" />
        </Switch>
      </main>
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
