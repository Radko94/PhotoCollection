const data = require("../data.json");
const AlbumModel = require("../dtos/album.model");

exports.getAlbums = (req, res, next) => {
  const result = processData();

  res.status(200).json(result);
};

const processData = () => {
  const albumOneRaw = data.filter((x) => x.albumId === 1);
  const albumTwoRaw = data.filter((x) => x.albumId === 2);
  const albumThreeRaw = data.filter((x) => x.albumId === 3);
  const albumFourRaw = data.filter((x) => x.albumId === 4);
  const albumFiveRaw = data.filter((x) => x.albumId === 5);

  const albumOne = new AlbumModel(1, "Album One");
  const albumTwo = new AlbumModel(2, "Album Two");
  const albumThree = new AlbumModel(3, "Album Three");
  const albumFour = new AlbumModel(4, "Album Four");
  const albumFive = new AlbumModel(5, "Album Five");
  const favorites = new AlbumModel(6, "Favorites");

  albumOneRaw.map((x) => albumOne.addPhoto(x));
  albumTwoRaw.map((x) => albumTwo.addPhoto(x));
  albumThreeRaw.map((x) => albumThree.addPhoto(x));
  albumFourRaw.map((x) => albumFour.addPhoto(x));
  albumFiveRaw.map((x) => albumFive.addPhoto(x));

  return [albumOne, albumTwo, albumThree, albumFour, albumFive, favorites];
};
