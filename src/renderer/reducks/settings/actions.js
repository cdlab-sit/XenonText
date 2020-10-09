export const SET_SIDE_BAR_VISIBILITY = 'SET_SIDE_BAR_VISIBILITY';

export const setSideBarVisibility = (isVisibility) => ({
  payload: {
    sideBarVisibility: isVisibility,
  },
  type: SET_SIDE_BAR_VISIBILITY,
});
