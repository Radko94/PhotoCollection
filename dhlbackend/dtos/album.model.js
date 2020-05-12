const PhotoModel = require("../dtos/photo.model");

class AlbumModel {
  constructor(albumId, albumTitle) {
    this.albumId = albumId;
    this.albumTitle = albumTitle;
    this.photoCollection = [];
    this.addPhoto = (photo) => {
      this.photoCollection.push(
        new PhotoModel(photo.id, photo.title, photo.url, photo.thumbnailUrl)
      );
    };
  }
}

module.exports = AlbumModel;
