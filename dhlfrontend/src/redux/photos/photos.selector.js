import { createSelector } from "reselect";

const selectPhotosState = (state) => state.photos;

export const selectFirsAlbum = createSelector(
  [selectPhotosState],
  (x) => x.firstAlbum
);

export const selectSecondAlbum = createSelector(
  [selectPhotosState],
  (x) => x.secondAlbum
);

export const selectThirdAlbum = createSelector(
  [selectPhotosState],
  (x) => x.thirdAlbum
);

export const selectFourthAlbum = createSelector(
  [selectPhotosState],
  (x) => x.fourthAlbum
);

export const selectFifthAlbum = createSelector(
  [selectPhotosState],
  (x) => x.fifthAlbum
);

export const selectPhotosError = createSelector(
  [selectPhotosState],
  (x) => x.photosError
);

export const selectAlbums = createSelector(
  [selectPhotosState],
  (x) => x.albums
);
