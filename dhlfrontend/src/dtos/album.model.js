import { PhotoModel } from "./photo.model";

export class AlbumModel {
  constructor(albumId, albumTitle) {
    this.albumId = albumId;
    this.albumTitle = albumTitle;
    this.photoCollection = [];
  }

  addPhoto = (photo) => {
    this.photoCollection.push(
      new PhotoModel(photo.id, photo.title, photo.url, photo.thumbnailUrl)
    );
  };
}
