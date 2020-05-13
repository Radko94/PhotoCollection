import { createSelector } from "reselect";

const selectPhotosState = (state) => state.photos;

export const selectAlbums = createSelector(
  [selectPhotosState],
  (x) => x.albums
);

export const selectPhotosError = createSelector(
  [selectPhotosState],
  (x) => x.photosError
);
