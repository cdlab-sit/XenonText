export const SET_SIDE_BAR_VISIBILITY = 'SET_SIDE_BAR_VISIBILITY';

export const setSideBarVisibility = (visibility) => ({
  payload: {
    visibility,
  },
  type: SET_SIDE_BAR_VISIBILITY,
});
