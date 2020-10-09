import { createSelector } from 'reselect';

// eslint-disable-next-line import/prefer-default-export
export const getSideBarVisibility = createSelector(
  [(state) => state],
  (state) => state.sideBar.visibility,
);
