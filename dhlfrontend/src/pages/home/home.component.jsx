import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";

import Album from "../../components/album/album.component";
import {
  getFirstAlbum,
  getSecondAlbum,
  getThirdAlbum,
  getFourthAlbum,
  getFifthAlbum,
} from "../../redux/photos/photos.effects";

import {
  selectFirsAlbum,
  selectSecondAlbum,
  selectThirdAlbum,
  selectFourthAlbum,
  selectFifthAlbum,
  selectAlbums,
} from "../../redux/photos/photos.selector";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
    };
  }

  componentWillMount() {
    const { getFirst, getSecond, getThird, getFourth, getFifth } = this.props;

    getFirst();
    getSecond();
    getThird();
    getFourth();
    getFifth();
  }

  logState = () => {
    const {
      firstAlbum,
      secondAlbum,
      thirdAlbum,
      fourthAlbum,
      fifthAlbum,
      albums,
    } = this.props;

    console.log(
      firstAlbum,
      secondAlbum,
      thirdAlbum,
      fourthAlbum,
      fifthAlbum,
      albums
    );
  };

  render() {
    const { albums } = this.props;

    return (
      <div>
        {
          albums.map(x => <Album key={x.albumId} album={x} />)
        }
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  firstAlbum: selectFirsAlbum,
  secondAlbum: selectSecondAlbum,
  thirdAlbum: selectThirdAlbum,
  fourthAlbum: selectFourthAlbum,
  fifthAlbum: selectFifthAlbum,
  albums: selectAlbums,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getFirst: getFirstAlbum,
      getSecond: getSecondAlbum,
      getThird: getThirdAlbum,
      getFourth: getFourthAlbum,
      getFifth: getFifthAlbum,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
