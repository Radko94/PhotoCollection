import React, { Component, lazy } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// import AlbumsMenu from "../../components/albums-menu/albums-menu.component";

import {
  selectAlbums,
  selectPhotosError,
} from "../../redux/photos/photos.selector";

const AlbumsMenu = lazy(() =>
  import("../../components/albums-menu/albums-menu.component")
);

class Home extends Component {
  constructor(props) {
    super(props);

    const { albums } = this.props;
    this.state = {
      albums: albums,
    };
  }

  render() {
    return (
      <div>
        <AlbumsMenu albums={this.state.albums} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  albums: selectAlbums,
  error: selectPhotosError,
});

export default connect(mapStateToProps)(Home);
