import { createSelector } from 'reselect';

// eslint-disable-next-line import/prefer-default-export
export const getSideBarSettings = createSelector(
  [(state) => state],
  (state) => state.sideBar,
);
