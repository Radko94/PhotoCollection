const data = require("../data.json");
const AlbumModel = require("../dtos/album.model");

exports.getAlbums = (req, res, next) => {
  const result = processData();

  res.status(200).json(result);
};

const processData = () => {
  const output = [];

  for (let i = 0; i < 6; i++) {
    const album = data.filter((x) => x.albumId === i + 1);
    const albumOutput = new AlbumModel(i + 1, iterationMapTable[i + 1]);
    album.map((x) => albumOutput.addPhoto(x));
    output.push(albumOutput);
  }

  return output;
};

const iterationMapTable = {
  1: "Album One",
  2: "Album Two",
  3: "Album Three",
  4: "Album Four",
  5: "Album Five",
  6: "Favorites",
};
