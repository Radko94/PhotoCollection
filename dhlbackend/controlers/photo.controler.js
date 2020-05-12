const data = require("../data.json");
const AlbumModel = require("../dtos/album.model");

exports.getFirstAlbum = (req, res, next) => {
  const result = data.filter((x) => x.albumId === 1);
  const albumOne = new AlbumModel(1, "Album One");

  result.map((x) => albumOne.addPhoto(x));

  res.status(200).json(albumOne);
};

exports.getSecondAlbum = (req, res, next) => {
  const result = data.filter((x) => x.albumId === 2);
  const albumTwo = new AlbumModel(2, "Album Two");

  result.map((x) => albumTwo.addPhoto(x));

  res.status(200).json(albumTwo);
};

exports.getThirdAlbum = (req, res, next) => {
  const result = data.filter((x) => x.albumId === 3);
  const albumThree = new AlbumModel(3, "Album Three");

  result.map((x) => albumThree.addPhoto(x));

  res.status(200).json(albumThree);
};

exports.getFourthAlbum = (req, res, next) => {
  const result = data.filter((x) => x.albumId === 4);
  const albumFour = new AlbumModel(4, "Album Four");

  result.map((x) => albumFour.addPhoto(x));

  res.status(200).json(albumFour);
};

exports.getFifthAlbum = (req, res, next) => {
  const result = data.filter((x) => x.albumId === 5);
  const albumFive = new AlbumModel(5, "Album Five");

  result.map((x) => albumFive.addPhoto(x));

  res.status(200).json(albumFive);
};
